import  { getMutation } from './js-modules/app-mutation.js';
const app = document.querySelector("#app");

getMutation(app, getAboutActions);


function getAboutActions() {
  const about = document.querySelector('.about');
  if(about) {
    const aboutInfo = document.querySelector('.about__info');
    const skills = document.querySelector('.skills');

    function toggleSkillAnimation(){
      skills.classList.toggle('skills_active');
    }

    function toggleDisplayInfo (){
      if(aboutInfo) {
        aboutInfo.classList.toggle('about__info_inactive');
      }
    }

    setInterval(() => {
      toggleSkillAnimation();
    }, 1900);

    aboutInfo.addEventListener('click', toggleDisplayInfo);
  }
}