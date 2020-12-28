import createNode from '../create-node.js';
import * as storage from '../local-storage/storage.js';
import language from '../layouts/general.js'
import Key from './Key.js';
import { tasks, Todolist } from '../todolist/todo-list.js';

const todolist = new Todolist(tasks).init();


const main = createNode('main', 'content', null);
const container = createNode('div', 'container', null, main);

export default class Keyboard {
  constructor(linesOrder){
    this.linesOrder = linesOrder;
    this.keyPresssed = {};
    this.isCaps = false;
  }

  init(langCode){
    this.currentLayout = language[langCode];
    this.allTasks = createNode('button', 'show-tasks', 'Show all tasks', container);
    const textareaWrap = createNode('div', 'output-wrap', null, container);
    this.preloader = createNode('div', 'preloader', null, textareaWrap);
    this.preloaderElem = createNode('div', 'preloader__elem', null, this.preloader);
    this.textarea = createNode('textarea', 'output-field', null, textareaWrap,
      ['rows', 4],
      ['cols', 50],
      ['placeholder', `Set focus here or press any key and start typing the task...\nUse Ctrl + Alt to switch language`],
    );
    this.addTask = createNode('button', 'add-task', 'Add new task...', container);

    this.keyboard = createNode('div', 'keyboard keyboard_hidden', null, main, ['language', langCode]);
    document.body.prepend(main);
    return this;
  }

  generateKeyboardLayout() {
    this.keyButtons = [];
    this.linesOrder.forEach((line, i)=> {
      const lineElem = createNode('div', 'keyboard__line', null, this.keyboard, ['line', i + 1]);
      line.forEach(code => {
        const keyObj = this.currentLayout.find(key=> key.code === code);
        if(keyObj) {
          const keyElem = new Key(keyObj);
          this.keyButtons.push(keyElem);
          lineElem.append(keyElem.btn)
        }
      })
    })
    this.textarea.addEventListener('focus', this.openKeyboard);
    document.addEventListener('keydown', this.handleEvent);
    document.addEventListener('keyup', this.handleEvent);
    this.keyboard.onmousedown = this.preHandleEvent;
    this.keyboard.onmouseup = this.preHandleEvent;
    this.allTasks.onclick = todolist.openTodolist;

    this.addTask.addEventListener('click', () => {
      todolist.addNewTask(this.textarea.value);
      // this.textarea.value = '';
      this.textarea.focus();
    })
  }

  preHandleEvent = (e) => {
    e.stopPropagation();
    const keyElem = e.target.closest('.keyboard__btn');
    if(!keyElem) return;
    const { dataset: { code } } = keyElem;
    keyElem.addEventListener('mouseleave', this.resetButtonState);
    this.handleEvent({code, type: e.type});
  };

  
  resetButtonState = (e) => {
    const code = e.target.dataset.code;
    const keyObj = this.keyButtons.find(key=> key.code === code);
    if(!keyObj.code.match(/Caps|Shift/g)) keyObj.btn.classList.remove('keyboard__btn_active');
    keyObj.btn.removeEventListener('mouseleave', this.resetButtonState);
  }

  openKeyboard = () => {
    this.keyboard.classList.remove('keyboard_hidden');
  }

  handleEvent = (e) => {
    if(e.stopPropagation) e.stopPropagation();
    const { type,code } = e;
    const keyObj = this.keyButtons.find(key => key.code === code);
    if(!keyObj) return;
    this.textarea.focus();

    if(type.match(/keydown|mousedown/)) {
      if(type.match(/keydown/)) e.preventDefault();
      if(code.match(/Shift/g)) this.shiftKey = true;

      if(code.match(/Control/g)) this.ctrlKey = true;
      if(code.match(/Alt/g)) this.altKey = true;

      if(this.shiftKey) this.switchUpperCase(true);

      if(code.match(/Control/g) && this.altKey) this.swtichLangs();
      if(code.match(/Alt/g) && this.ctrlKey) this.swtichLangs();

      keyObj.btn.classList.add('keyboard__btn_active');

      if(code.match(/Caps/g) && !this.isCaps) {
        this.isCaps = true;
        this.switchUpperCase(true);
      } else if (code.match(/Caps/g) && this.isCaps) {
        this.isCaps = false;
        this.switchUpperCase(false);
        keyObj.btn.classList.remove('keyboard__btn_active');
      }

      if(!this.isCaps) {
        this.renderSymbols(keyObj, this.shiftKey ? keyObj.shift : keyObj.small);
      } else if (this.isCaps) {
        if(this.shiftKey) {
          this.renderSymbols(keyObj, keyObj.upperSymb.innerHTML ? keyObj.shift : keyObj.small);
        } else {
          this.renderSymbols(keyObj, !keyObj.upperSymb.innerHTML ? keyObj.shift : keyObj.small);
        }
      }

    } else if (type.match(/keyup|mouseup/gi)) {
      if(code.match(/Shift/g)) {
        this.shiftKey = false;
        this.switchUpperCase(false);
      };

      if(code.match(/Alt/g)) this.altKey = false;
      if(code.match(/Control/g)) this.ctrlKey = false;

      if(!code.match(/Caps/g)) keyObj.btn.classList.remove('keyboard__btn_active');
    }
  }


  swtichLangs(){
    const allLangs = Object.keys(language);
    let currentIndex = allLangs.indexOf(this.keyboard.dataset.language);
    this.currentLayout = currentIndex + 1 < allLangs.length ? language[allLangs[currentIndex += 1]]
    : language[allLangs[currentIndex -= currentIndex]];

    this.keyboard.dataset.language = allLangs[currentIndex];
    storage.set('keyboardLang', allLangs[currentIndex]);

   this.keyButtons.forEach(button=> {
     const keyObj = this.currentLayout.find(key=> key.code === button.code);
     if(!keyObj) return;
     button.shift = keyObj.shift;
     button.small = keyObj.small;
     if(keyObj.shift && keyObj.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
       button.upperSymb.innerHTML = keyObj.shift
     } else {
      button.upperSymb.innerHTML = '';
     }

     button.letter.innerHTML = keyObj.small;

     if(this.isCaps) this.switchUpperCase(true);
   }) 
  }

  renderSymbols(keyObj,symbol){
    let cursorPos = this.textarea.selectionStart;
    const left = this.textarea.value.slice(0,cursorPos);
    const right = this.textarea.value.slice(cursorPos);

    const fnButtonsHandler = {
      Tab: () => {
        this.textarea.value = `${left}\t${right}`;
        cursorPos += 1;
      },
      ArrowLeft: () => {
        cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
      },
      ArrowRight: () => {
        cursorPos += 1;
      },
      ArrowUp: () => {
        const positionFromLeft = this.textarea.value.slice(0, cursorPos).match(/(\n).*$(?!\1)/g) || [[1]];
        cursorPos -= positionFromLeft[0].length;
      },
      ArrowDown: () => {
        const positionFromLeft = this.textarea.value.slice(cursorPos).match(/^.*(\n).*(?!\1)/) || [[1]];
        cursorPos += positionFromLeft[0].length;
      },
      Enter: () => {
        this.textarea.value = `${left}\n${right}`;
        cursorPos += 1;
      },
      Backspace: () => {
        this.textarea.value = `${left.slice(0, -1)}${right}`;
        cursorPos -= 1;
      },
      Delete: () => {
        this.textarea.value = `${left}${right.slice(1)}`;
      },
      Space: () => {
        this.textarea.value = `${left} ${right}`;
        cursorPos += 1;
      }
    }
    
    if(fnButtonsHandler[keyObj.code]) fnButtonsHandler[keyObj.code]();

    else if(!keyObj.isFnKey) {
      cursorPos += 1;
      this.textarea.value = `${left}${symbol || ''}${right}`;
    }
    this.textarea.setSelectionRange(cursorPos, cursorPos);
  }

  switchUpperCase(isTrue){
    if(isTrue) {
      this.keyButtons.forEach(button=> {
        if(button.upperSymb.innerHTML) {
          if(this.shiftKey) {
            button.upperSymb.classList.add('upper-symb_active');
            button.letter.classList.add('letter_inactive');
          }
        }

        if(!button.isFnKey && this.isCaps && !this.shiftKey && !button.upperSymb.innerHTML) {
          button.letter.innerHTML = button.shift;
        } else if (!button.isFnKey && this.isCaps && this.shiftKey) {
          button.letter.innerHTML = button.small;
        } else if (!button.isFnKey && !button.upperSymb.innerHTML) {
          button.letter.innerHTML = button.shift;
        }
      })
    } else {
      this.keyButtons.forEach(button=> {
        if(button.upperSymb.innerHTML && !button.isFnKey) {
          button.upperSymb.classList.remove('upper-symb_active');
          button.letter.classList.remove('letter_inactive');

          if(!this.isCaps) {
            button.letter.innerHTML = button.small;
          } else if (!this.isCaps) {
            button.letter.innerHTML = button.shift
          }
        } else if (!button.isFnKey) {
          if(this.isCaps) {
            button.letter.innerHTML = button.shift;
          } else {
            button.letter.innerHTML = button.small;
          }
        }
      })
    }
  }
}