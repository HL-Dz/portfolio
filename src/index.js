import './sass/main.scss';
import Greeting from './js-modules/greeting.js';
import technologies from './js-modules/data.js';
import locationResolver from './js-modules/locationResolver.js';

const app = document.querySelector('#app');
const navigation = document.querySelector('.navigation-block');
const navLinks = document.querySelectorAll('.nav__link');

window.addEventListener('load', () => {
  let location = window.location.hash;
  if(location) {
    locationResolver(app, location);
  }
})


const greeting = new Greeting({
  data: technologies,
  fullname: 'Dzmitry Hlushak',
  profession: 'Frontend developer'
});

navigation.addEventListener('click', (e) => {
  let target = e.target.closest('[data-type="route-btn"]')
  if(target) {
    let href = target.dataset.href;
    navLinks.forEach(link => {
      link.classList.remove('nav__link_active')
    })
    target.classList.add('nav__link_active');
    locationResolver(app, href);
  }
})