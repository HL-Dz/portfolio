import { works } from './portfolio-data.js';

const getWork = (el) => {
  return `
  <div class="box" data-elem="box" data-id="${el.id}">
    <div class="box__inner">
      <div class="box__front">
        <img class="box__img" src="${el.imgPath}" alt="${el.name}">
        <div class="box__description">
          <div class="box__text">
            <div class="box__caption">${el.title}</div>
            <div class="box__help" title="Описание работы" data-info="help" data-id="${el.id}">
              <i class="fas fa-info box__icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="box__back">
        <div class="box__info">
          Смотреть исходники на Github + Production.
        </div>
        <div class="source">
          <a class="source__link source__link_code" href="${el.codeLink}" data-type="link" target="_blank" title="Исходники">
            <i class="fas fa-file-code source-code"></i>
          </a>
          <a class="source__link source__link_watch" href="${el.prodLink}" data-type="link" target="_blank" title="Production">
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
    <section class="portfolio">
      <div class="portfolio__img"></div>
      <div class="container-block">
        <h1 class="portfolio__title">Портфолио</h1>
        <div class="portfolio__note">
          <p>
            <i class="fas fa-comment-dots"></i>
            Работы кликабельны. Чтобы получить краткую информацию о 
            проекте нажмите в правом верхнем углу на <strong>i</strong>.
            Чтобы посмотреть исходники или Production нажмите в любой другой области работы.
          </p>
        </div>
        <div class="portfolio-container">
          ${allWorks.join('')}
        </div>
      </div>
    </section>
  `
};


export default renderPortfolio;