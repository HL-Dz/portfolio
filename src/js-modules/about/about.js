const renderAbout = () => {
  return `
    <div class="about">
      <div class="about__img"></div>
      <div class="container-block">
        <h1 class="about__title">Обо мне</h1>
        <div class="skills">

          <div class="skill-container">
            <div class="skill__pic">
              <img class="skill__img" src="./img/css.png" alt="CSS"/>
            </div>
            <div class="skill">
              <div class="skill__title">CSS</div>
              <div class="skill__description">
                Смогу санимировать в пределах разумного все, что
                не анимируется.
              </div>
            </div>
          </div>

          <div class="skill-container">
            <div class="skill__pic">
              <img class="skill__img" src="./img/html.png" alt="HTML5"/>
            </div>
            <div class="skill">
              <div class="skill__title">HTML5</div>
              <div class="skill__description">
                Добрый HTML не оставит равнодушным никого.
              </div>
            </div>
          </div>

          <div class="skill-container">
            <div class="skill__pic">
              <img class="skill__img" src="./img/js.png" alt="JavaScript"/>
            </div>
            <div class="skill">
              <div class="skill__title">JavaScript</div>
              <div class="skill__description">
                Динамика будет очень даже хороша!
              </div>
            </div>
          </div>

          <div class="skill-container">
            <div class="skill__pic">
              <img class="skill__img" src="./img/webpack.png" alt="Webpack"/>
            </div>
            <div class="skill">
              <div class="skill__title">Webpack</div>
              <div class="skill__description">
                Соберу с помощью сборки все то, что не
                собирается!
              </div>
            </div>
          </div>

          <div class="skill-container">
            <div class="skill__pic">
              <img class="skill__img" src="./img/git.png" alt="Git"/>
            </div>
            <div class="skill">
              <div class="skill__title">GIT</div>
              <div class="skill__description">
                Ну а кто же будет сохранять все версии!
                Без этого никак!
              </div>
            </div>
          </div>

          <div class="skill-container">
            <div class="skill__pic">
              <img class="skill__img" src="./img/sass.png" alt="Sass"/>
            </div>
            <div class="skill">
              <div class="skill__title">SASS</div>
              <div class="skill__description">
                CSS - это конечно хорошо, но жизнь невозможна
                без миксинов, плейсхолдеров и прочих радостей жизни.
              </div>
            </div>
          </div>

          <div class="skill-container">
            <div class="skill__pic">
              <img class="skill__img" src="./img/gulp.png" alt="Gulp"/>
            </div>
            <div class="skill">
              <div class="skill__title">GULP</div>
              <div class="skill__description">
                Если с webpack-ом не прокатит, то на краняк
                можно Gulp-ом прихорошить проект.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};


export default renderAbout;

// {/* <div class="about__info">
//   <div class="about__desc">
//     Тоже понравился лес на заднем плане? По-моему красиво!
//     А теперь к делу. В этом разделе нет ни километра букв, ни тонны разных табличек.
//     Есть моя фотография (вроде ничего такая, да?) и 
//     некоторое количество скилов, от которых зависит, пригласите ли вы меня
//     для интервью в мягкое кресло вашей компании, где рядом на столе будет стоять чашечка
//     ароматного кофе. А в перерыве, пока будете совещаться, могу сыграть
//     с тимлидом в партейку настольного тенниса (Warning! во время партии его нервное состояние
//     может пошатнуться ).
//   </div>
//   <div class="avatar">
//     <img class="avatar__img" src="./img/ava.jpg" alt="Avatar"/>
//   </div>
// </div> */}