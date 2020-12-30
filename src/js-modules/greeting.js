const generateTemplate = (data = [], fullname, profession) => {
  let name = fullname ?? 'Some user';
  let currentProf = profession ?? "Who are you?";
  let [nameSymbol, surnameSymbol] = name.split(' ');
  const wrap = document.createElement('div');
  wrap.classList.add('wrapper-greet');
  wrap.setAttribute('id', 'wrapper-greet');

  const items = data.map(el => {
    return `
    <div class="technologies__pic" data-elem="${el.title}" title="${el.title}">
      <img class="tech-img" src="${el.src}" alt="${el.title}">
    </div>`
  })

  let template = `
  <div class="technologies">
    ${items.join('')}
  </div>
  <div class="block-top"></div>
  <div class="block-bottom"></div>
  <div class="info">
    <div class="info__symbols">
      <span>${nameSymbol.slice(0,1).toUpperCase()}</span>
      <span class="symb-upper">${surnameSymbol.slice(0,1).toUpperCase()}</span>
    </div>
    <div class="info__desc">
      <div class="info__fullname">${name}</div>
      <div class="info__spec">${currentProf}</div>
      <div class="wrap-btn">
        <a href="#" class="button-on" data-type="button-on"></a>
      </div>
    </div>
  </div>
  `;

  wrap.innerHTML = template;
  return wrap;
};

export default class Greeting {
  constructor(options){
    this.options = options;

    this.render();
    this.setup();
  }

  render(){
    const { data, fullname, profession } = this.options;
    const greeting = generateTemplate(data, fullname, profession);
    document.body.prepend(greeting);
  }

  setup(){
    this.$wrap = document.querySelector('#wrapper-greet');
    this.$wrapBtn = this.$wrap.querySelector('.wrap-btn');
    this.$tech = this.$wrap.querySelector('.technologies');
    this.$info = this.$wrap.querySelector('.info');
    this.$blockTop = this.$wrap.querySelector('.block-top');
    this.$blockBottom = this.$wrap.querySelector('.block-bottom');
    this.handleClick = this.handleClick.bind(this);
    this.$wrap.addEventListener('click', this.handleClick);
  }

  handleClick(e){
    const target = e.target.dataset.type;

    if(target === 'button-on') {
      e.preventDefault();
      this.open();
    }
  }
  
  open(){
    this.$wrapBtn.classList.add('wrap-btn_active');
    this.showWorks().then(() => {
      setTimeout(() => {
        this.destroy();
      }, 1200);
    });
  }

  showWorks(){
    return new Promise(resolve=> {
      setTimeout(() => {
        this.$tech.classList.add('technologies_close')
        resolve();
      }, 600);
    }).then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          this.$info.classList.add('info_inactive');
          resolve();
        }, 700);
      })
    }).then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          this.$blockTop.classList.add('block-top_active');
          this.$blockBottom.classList.add('block-bottom_active');
          resolve();
        }, 900);
      })
    })
  }

  destroy(){
    this.$wrap.removeEventListener('click', this.handleClick);
    this.$wrap.remove();
  }
}