import './sass/main.scss';


const btn = document.querySelector('.show');
btn.onclick = () => {
  let technologies = document.querySelector('.technologies');
  technologies.classList.add('technologies_close');
  setTimeout(() => {
    document.querySelector('.info').classList.add('info_inactive');
  }, 1000);
  setTimeout(() => {
    document.querySelector('.block-top').classList.add('block-top_active');
    document.querySelector('.block-bottom').classList.add('block-bottom_active');
  }, 2000);
}