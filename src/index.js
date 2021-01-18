import './sass/main.scss';
import Greeting from './js-modules/greeting.js';
import technologies from './js-modules/data.js';
import locationResolver from './js-modules/locationResolver.js';
import Navigation from './js-modules/navigation.js';

const app = document.querySelector('#app');


const greeting = new Greeting({
  data: technologies,
  fullname: 'Dzmitry Hlushak',
  profession: 'Frontend developer'
});

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
  } else if (target.closest('[data-elem="box"]') && !target.closest('[data-type="link"]')) {
    let elem = target.closest('[data-elem="box"]');
    rotateWork(elem);
  } else if (target.closest('[data-type="title-el"]')) {
    toggleContactLinks(target);
  } else if (target.dataset.close === 'contact') {
    toggleContactLinks(target);
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

// Показать ссылки на одну из работ
const rotateWork = (elem) => {
  elem.classList.toggle('box_rotate');
}


/********************************CONTACT SECTION********************************/

// Показать/скрыть ссылки для связи
const toggleContactLinks = (target) =>  {
  let communication = target.closest('.communication');
  communication.classList.toggle('communication_active');
}