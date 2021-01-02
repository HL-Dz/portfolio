import loader from './loader.js';
import locationResolver from './locationResolver.js';

let pageLoader = loader();

let navData = [
  {id: 1, path: '#/about/', title: 'About', icon: 'fa-address-card'},
  {id: 2, path: '#/portfolio/', title: 'Portfolio', icon: 'fa-tv'},
  {id: 3, path: '#/contact/', title: 'Contact', icon: 'fa-address-book'},
];

const getNavigationTemplate = (path) => {
  const navigationElem = document.createElement('div');
  navigationElem.classList.add('navigation-block');

  const navItems = navData.map(el => {
    let cls = '';
    if(path === el.path) {
      cls = 'nav__link_active';
    }
    return `
    <li class="nav__item">
      <a href="${el.path}" data-href="${el.path}" data-type="route-btn" class="nav__link ${cls}">
        <span class="nav__text">${el.title}</span>
        <i class="fas ${el.icon} nav__icon"></i>
      </a>
    </li>`
  })

  let template = `
  <div class="burger" id="burger">
    <div class="burger__item"></div>
    <div class="burger__item"></div>
    <div class="burger__item"></div>
  </div>
  <nav class="nav">
    <ul class="nav__list">
      ${navItems.join('')}
    </ul>
  </nav>
  `

  navigationElem.innerHTML = template;
  return navigationElem;
}

export default class Navigation {
  constructor(){
    this.currentHref = window.location.hash;
    this.render();
    this.setup();
  }

  render(){
    const navigation = getNavigationTemplate(this.currentHref);
    document.body.prepend(navigation);
  }

  setup(){
    this.goToPath = this.goToPath.bind(this);
    this.$navElem = document.querySelector('.navigation-block');
    this.$app = document.querySelector('#app');
    this.$allLinks = document.querySelectorAll('.nav__link');
    this.$navElem.addEventListener('click', this.goToPath);
  }

  goToPath(e){
    let target = e.target.closest('[data-type="route-btn"]');
    if(target) {
      this.currentHref = target.dataset.href;
      document.body.append(pageLoader);
      this.$app.classList.add('app_inactive');
      this.$allLinks.forEach(link => {
        link.classList.remove('nav__link_active');
      })
      target.classList.add('nav__link_active');
      setTimeout(() => {
        locationResolver(this.$app, this.currentHref);
        this.$app.classList.remove('app_inactive');
        pageLoader.remove();
      }, 1200);
    }
  }
}