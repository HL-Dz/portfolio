import { works } from './portfolio-data.js';

const getWork = (el) => {
  return `
  <div class="box">
    <div class="box__inner">
      <div class="box__front">
        <img class="box__img" src="${el.imgPath}" alt="${el.name}">
        <div class="box__description">
          <div class="box__text">${el.title}</div>
        </div>
      </div>
      <div class="box__back">
        <div class="box__info">
          Смотреть исходники на Github + Production.
        </div>
        <div class="source">
          <a class="source__link source__link_code" href="${el.codeLink}" target="_blank" title="Исходники">
            <i class="fas fa-file-code source-code"></i>
          </a>
          <a class="source__link source__link_watch" href="${el.prodLink}" target="_blank" title="Production">
            <i class="fas fa-eye source-watch"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  `
}

const renderPortfolio = () => {
  const allWorks = works.map(elem => {
    return getWork(elem);
  })


  return `
    <div class="portfolio">
      <div class="portfolio__img"></div>
      <div class="container-block">
        <h1 class="portfolio__title">Портфолио</h1>
        <div class="portfolio-container">
          ${allWorks.join('')}
        </div>
      </div>
    </div>
  `
};


export default renderPortfolio;