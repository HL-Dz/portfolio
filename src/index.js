import './sass/main.scss';
import Greeting from './js-modules/greeting.js';
import technologies from './js-modules/data.js';
import locationResolver from './js-modules/locationResolver.js';
import loader from './js-modules/loader.js';
import Navigation from './js-modules/navigation.js';

const app = document.querySelector('#app');

const greeting = new Greeting({
  data: technologies,
  fullname: 'Dzmitry Hlushak',
  profession: 'Frontend developer'
});


window.addEventListener('load', () => {
  let location = window.location.hash;
  if(location) {
    locationResolver(app, location);
  }
  
  setInterval(() => {
    toggleSkillAnimation();
  }, 2000);
});

const nav = new Navigation();


function toggleSkillAnimation(){
  const skills = document.querySelector('.skills');
  if(skills) {
    skills.classList.toggle('skills_active');
  }
}