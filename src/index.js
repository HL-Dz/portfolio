import './sass/main.scss';


document.querySelector('.button-on').addEventListener('click', () => {
  let wrapBtn = document.querySelector('.wrap-btn');
  let technologies = document.querySelector('.technologies');
  wrapBtn.classList.toggle('wrap-btn_active');
   setTimeout(() => {
    technologies.classList.add('technologies_close');
   }, 600);
  setTimeout(() => {
    document.querySelector('.info').classList.add('info_inactive');
  }, 1300);
  setTimeout(() => {
    document.querySelector('.block-top').classList.add('block-top_active');
    document.querySelector('.block-bottom').classList.add('block-bottom_active');
  }, 2200);
})