import createNode from '../create-node.js';


export default class Key {
  constructor({small,shift,code}){
    this.small = small;
    this.shift = shift;
    this.code = code;

    this.isFnKey = Boolean(small.match(/Tab|Caps|Shift|Ctrl|Win|Alt|Enter|Back|Del|arr/gi));

    if(shift && shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/gi)) {
      this.upperSymb = createNode('div', 'upper-symb', this.shift);
    } else {
      this.upperSymb = createNode('div', 'upper-symb', '');
    }


    this.letter = createNode('div', 'letter', small);

    if(small.match(/Caps/gi)){
      this.btn =  createNode('div', 'keyboard__btn keyboard__btn_activatible', [this.upperSymb, this.letter], null,
        ['code', this.code],
        this.isFnKey ? ['fn', 'true'] : ['fn', 'false']
      )
    } else {
      this.btn =  createNode('div', 'keyboard__btn', [this.upperSymb, this.letter], null,
        ['code', this.code],
        this.isFnKey ? ['fn', 'true'] : ['fn', 'false']
      )
    }
  }
};