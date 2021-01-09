import './sass/main.scss';
import Greeting from './js-modules/greeting.js';
import technologies from './js-modules/data.js';
import locationResolver from './js-modules/locationResolver.js';
import Navigation from './js-modules/navigation.js';

const app = document.querySelector('#app');

window.addEventListener('load', () => {
  let location = window.location.hash;
  if(location) {
    locationResolver(app, location);
  }

  const greeting = new Greeting({
    data: technologies,
    fullname: 'Dzmitry Hlushak',
    profession: 'Frontend developer'
  });

  const nav = new Navigation();
});