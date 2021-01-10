import skillsData from './skills-data.js';

const getSkill = (el) => {
  return `
  <div class="skill-container">
    <div class="skill__pic">
      <img class="skill__img" src="${el.imgUrl}" alt="${el.title}"/>
    </div>
    <div class="skill">
      <div class="skill__title">${el.title}</div>
      <div class="skill__description">${el.description}</div>
    </div>
</div>
  `
}


const renderAbout = () => {

  const skills = skillsData.map(skill => {
    return getSkill(skill);
  })
  
  return `
    <div class="about">
      <div class="about__img"></div>
      <div class="container-block">
        <h1 class="about__title">Обо мне</h1>
        <div class="about__info about__info_inactive">
          <i class="fas fa-arrow-circle-down about__arrow"></i>
          <span class="about__text">Смотреть</span>
          <div class="about__desc">
            Тоже понравился лес на заднем плане? По-моему красиво!
            А теперь к делу. В этом разделе нет ни километра букв, ни тонны разных табличек.
            Есть моя фотография (вроде ничего такая) и 
            скилы, от которых зависит, пригласите ли вы меня
            для интервью в мягкое кресло вашей компании, где рядом на столе будет стоять чашечка
            ароматного кофе. А в перерыве, пока будете совещаться, могу сыграть
            с тимлидом в партейку настольного тенниса (<i class="fas fa-exclamation-circle warning"></i> во время партии его нервное состояние
            может пошатнуться ).
          </div>
          <div class="avatar">
            <img class="avatar__img" src="./img/ava.jpg" alt="Avatar"/>
          </div>
        </div>
        <div class="skills">${skills.join('')}</div>
      </div>
    </div>
  `
};


export default renderAbout;