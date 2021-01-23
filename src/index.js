import './sass/main.scss';
import Greeting from './js-modules/greeting.js';
import technologies from './js-modules/data.js';
import { works } from './js-modules/portfolio/portfolio-data.js';
import modal from './js-modules/modal/modal.js';
import getModalContent from './js-modules/portfolio/modal-content.js';
import locationResolver from './js-modules/locationResolver.js';
import Navigation from './js-modules/navigation.js';

const app = document.querySelector('#app');



// const greeting = new Greeting({
//   data: technologies,
//   fullname: 'Dzmitry Hlushak',
//   profession: 'Frontend developer'
// });

const nav = new Navigation();


window.addEventListener('load', () => {
  let location = window.location.hash;
  if(location) {
    locationResolver(app, location);
  }
});

// Обработчик на главном элементе app
app.addEventListener('click', (e) => {
  let target = e.target;
  if(target.closest('[data-elem="info"]')) {
    toggleDisplayInfo();
  } else if (target.closest('[data-elem="box"]') && !target.closest('[data-type="link"]') & !target.closest('[data-info="help"]')) {
    let elem = target.closest('[data-elem="box"]');
    rotateWork(elem);
  } else if (target.closest('[data-type="title-el"]')) {
    toggleContactLinks(target);
  } else if (target.dataset.close === 'contact') {
    toggleContactLinks(target);
  } else if (target.closest('[data-info="help"]')) {
    const id = +target.closest('[data-info="help"]').dataset.id;
    const work = works.find(w => w.id === id);
    const content = getModalContent(work);
    workModal.setContent(content);
    workModal.open();
  }
});


/********************************ABOUT SECTION********************************/

// Показать/скрыть информацию 
const toggleDisplayInfo = () => {
  const aboutInfo = document.querySelector('.about__info');
  aboutInfo.classList.toggle('about__info_inactive');
}

// Анимация для скилов
const toggleSkillAnimation = () => {
  const skills = document.querySelector('.skills');
  if(skills) {
    skills.classList.toggle('skills_active');
  }
};

setInterval(() => {
  toggleSkillAnimation()
}, 1900);


/********************************PORTFOLIO SECTION********************************/

// Показать/скрыть ссылки на одну из работ
const rotateWork = (elem) => {
  elem.classList.toggle('box_rotate');
}

// Модальное окно для работ
const workModal = modal({
  title: 'Краткое описание',
  footerButtons: [
    {text: 'Закрыть', cls: 'btn-cancel', handler(){
      workModal.close();
    }}
  ]
});


/********************************CONTACT SECTION********************************/

// Показать/скрыть ссылки для связи
const toggleContactLinks = (target) =>  {
  let communication = target.closest('.communication');
  communication.classList.toggle('communication_active');
}
