import './sass/main.scss';
import Greeting from './js-modules/greeting.js';
import technologies from './js-modules/data.js'

const greeting = new Greeting({
  data: technologies,
  fullname: 'Dzmitry Hlushak',
  profession: 'Frontend developer'
});