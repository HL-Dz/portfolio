import createNode from '../create-node.js';
import generateCurrentTime from '../current-time.js';
import generateId from '../generate-id.js';
import { generateItem } from './components/task.js';


export let tasks = [];

if(localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

const isElems = JSON.parse(localStorage.getItem("tasks")) || [];

export class Todolist {
  constructor(todos){
    this.todos = todos;
  }

  // Todolist initialization
  init(){
    // overlay
    this.overlay = createNode('div', 'overlay', null);

    // todo
    this.todo = createNode('div', 'todo', null, this.overlay);

    // closeBtn
    this.closeBtn = createNode('div', 'todo__close', null, this.todo, ['title', 'Close']);
    this.closeIcon = createNode('div', 'todo__close-icon', null, this.closeBtn);

    // todoWrapper
    this.todoWrapper = createNode('div', 'todo__wrapper', null, this.todo);
    
    // todoTitle
    this.todoTitle = createNode('h1', 'todo__title',
      [createNode('span', 'todo__title_mod',  'TODO'), 'List'], this.todoWrapper);

    // wrapList 
    this.wrapList = createNode('div', 'wrapper__list', null, this.todoWrapper);

    // emptyElem
    let str = 'No tasks...';
    this.emptyElem = createNode('div', `${isElems.length == 0 ? 'todo__empty' : 'todo__empty todo__empty_hidden'}`, str, this.todoWrapper);
    
    // items
    if(this.todos.length) {
      this.renderListItems();
    }

    // Message for empty field
    this.message = createNode('div', 'message', null, document.body);
    const textMessage = createNode('div', 'message__text', 'Empty value!', this.message);
    document.body.prepend(this.overlay);
    this.hideTodolist();
    this.bindEvents();
    return this;
  }

  // List Events
  bindEvents = () => {
    this.closeBtn.onclick = this.hideTodolist;
    this.wrapList.addEventListener('change', this.showModalToComplete);
    this.wrapList.addEventListener('click', this.showModalToConfirm);
    document.addEventListener('keydown', this.hideTodoByEscape);
  }


  // First render of list items
  renderListItems = () => {
    this.todos.forEach(elem => {
      this.createNewListItem(elem);
    })
  }

  // Rendering a new list item
  createNewListItem = elem => {
    this.item = generateItem(elem);
    this.wrapList.prepend(this.item);
  }

  // Hide todoList
  hideTodolist = () => {
    this.overlay.classList.add('overlay_hide');
  }

  // Hide todolist by pressing
  hideTodoByEscape = (e) => {
    if(e.code === 'Escape') {
      this.hideTodolist();
    }
  }

  // Show todoList
  openTodolist = () => {
    this.overlay.classList.remove('overlay_hide');
  }

  // Add new task
  addNewTask(value){
    value = value.trim();
    let preloader = document.querySelector('.preloader');
    let addTaskBtn = document.querySelector('.add-task');
    let showTaskBtn = document.querySelector('.show-tasks');
    let outputField = document.querySelector('.output-field');
    if(!value) {
        this.showMessage();
          addTaskBtn.setAttribute('disabled', '');
        setTimeout(() => {
          addTaskBtn.removeAttribute('disabled');
        }, 2000);
        return;
      } else {
        return new Promise(resolve=> {
          preloader.classList.add('preloader_active');
          addTaskBtn.setAttribute('disabled', '');
          showTaskBtn.setAttribute('disabled', '');

          setTimeout(() => {
            preloader.classList.remove('preloader_active');
            addTaskBtn.removeAttribute('disabled');
            showTaskBtn.removeAttribute('disabled');
            outputField.value = '';
            resolve();
          }, 1500);
        }).then(() => {
            let newItem = {
              id: generateId(),
              todo: value,
              checked: false,
              disabled: false,
              startTime: generateCurrentTime(),
              endTime: ''
            }
        
            const isFirstStart = !this.todos.length;
        
            if(isFirstStart) {
              this.emptyElem.classList.add('todo__empty_hidden');
            }
        
            this.todos.push(newItem);
            localStorage.setItem("tasks", JSON.stringify(this.todos));
            this.createNewListItem(newItem);
          })
      }
  }

  // Show message for empty field
  showMessage = () => {
    this.message.classList.add('message_active');
    setTimeout(() => {
      this.message.classList.remove('message_active');
    }, 2000);
  }

  // Show modal to confirm delete the task
  showModalToConfirm = (e) => {
    let target = e.target;
    let removeBtn = target.closest('.item__remove');

    if(removeBtn) {
      let item = removeBtn.closest('.item');
      let itemConfirmElem = item.querySelector('.item__confirm-modal');
      let cancelBtn = itemConfirmElem.querySelector('.confirm-cancel');
      let confirmItemDel = itemConfirmElem.querySelector('.confirm-btn');
      itemConfirmElem.classList.add('item__confirm-modal_active');

      // Hide modal to confirm delete the task
      cancelBtn.onclick = (e) => {
        itemConfirmElem.classList.remove('item__confirm-modal_active');
      }

      // Delete the task
      confirmItemDel.onclick = () => {
        let confirmedId = confirmItemDel.dataset.confirmed;
        itemConfirmElem.classList.add('item__confirm-modal_active-bottom');
        setTimeout(() => {
          item.classList.add('item_hidden');
        }, 500);
        setTimeout(() => {
          this.todos.forEach((elem,ind) => {
            if(elem.id == confirmedId) {
              this.todos.splice(ind, 1);
              item.remove();
              localStorage.setItem("tasks", JSON.stringify(this.todos));
  
              if(!this.todos.length) {
                this.emptyElem.classList.remove('todo__empty_hidden');
              }
            }
          })
        }, 1000);
      }
    }
  }

  // Show modal to task complete
  showModalToComplete = (e) => {
    let itemLabel = e.target.closest('.item__label');
    let item = itemLabel.closest('.item');
    let input = itemLabel.querySelector('.item__input');
    let modal = item.querySelector('.item__completion-modal');
    let cancelBtn = item.querySelector('.completion-cancel');
    let completionBtn = item.querySelector('.completion-btn');
    itemLabel.querySelector('.item__input').checked = true;

    if(itemLabel) {
      modal.classList.add('item__completion-modal_active');

      // Hide modal window
      cancelBtn.addEventListener('click', () => {
        input.checked = false;
        modal.classList.remove('item__completion-modal_active');
      })

      // Complete the task.
      completionBtn.addEventListener('click', () => {
        let forLabel = itemLabel.getAttribute('for');
        let inputId = input.getAttribute('id');
        let finishElem = item.querySelector('.item__finish');
        let finishTime = finishElem.querySelector('.item__finish-time');
        let finishDate = finishElem.querySelector('.item__finish-date');
        let finishPopup = finishElem.querySelector('.item__finish-popup');

        modal.classList.add('item__completion-modal_active-top');

      
        setTimeout(() => {
          if(forLabel == inputId) {
            let text = itemLabel.querySelector('.item__text').textContent;
            let additional = itemLabel.querySelector('.additional');
            additional.classList.add('additional_active');
            
            this.todos.forEach(elem => {
              if(elem.todo === text) {
                elem.checked = true;
                elem.disabled = true;
                elem.endTime = generateCurrentTime();
                if(elem.checked) {
                  finishTime.innerHTML = elem.endTime.time;
                  finishDate.innerHTML = elem.endTime.date;
                  finishPopup.innerHTML = `Task completed: ${elem.endTime.time} ${elem.endTime.date}`;
                  finishElem.classList.add('item__finish_display');
                  itemLabel.querySelector('.item__text').classList.add('item__text_inactive');
                } else {
                  elem.endTime = '' ;
                  finishElem.classList.remove('item__finish_display');
                  itemLabel.querySelector('.item__text').classList.remove('item__text_inactive');
                }
                localStorage.setItem("tasks", JSON.stringify(this.todos));
              }
            })
          }
        }, 300);
      })
    }
  }
}
