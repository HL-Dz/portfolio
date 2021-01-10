const renderPortfolio = () => {
  return `
    <div class="portfolio">
      <div class="portfolio__img"></div>
      <div class="container-block">
        <h1 class="portfolio__title">Портфолио</h1>
        <div class="portfolio-container">

          <div class="box">
            <div class="box__inner">
              <div class="box__front">
                <img class="box__img" src="./img/keyboard.png" alt="Keyboard">
                <div class="box__description">
                  <div class="box__text">
                    Виртуальная клавиатура + TodoList
                  </div>
                </div>
              </div>
              <div class="box__back">
                <div class="box__info">
                  Смотреть исходники на Github + Production.
                </div>
                <div class="source">
                  <a class="source__link source__link_code" href="https://github.com/HL-Dz/virtual-keyboard-app" target="_blank" title="Исходники">
                    <i class="fas fa-file-code source-code"></i>
                  </a>
                  <a class="source__link source__link_watch" href="https://virtual-keyboard-app1.netlify.app/" target="_blank" title="Production">
                    <i class="fas fa-eye source-watch"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="box__inner">
              <div class="box__front">
                <img class="box__img" src="./img/singolo.png" alt="Singolo">
                <div class="box__description">
                  <div class="box__text">
                    Адаптивный лендинг
                  </div>
                </div>
              </div>
              <div class="box__back">
                <div class="box__info">
                  Смотреть исходники на Github + Production.
                </div>
                <div class="source">
                  <a class="source__link source__link_code" href="#" target="_blank" title="Исходники">
                    <i class="fas fa-file-code source-code"></i>
                  </a>
                  <a class="source__link source__link_watch" href="#" target="_blank" title="Production">
                    <i class="fas fa-eye source-watch"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `
};


export default renderPortfolio;