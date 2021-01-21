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
    <section class="about">
      <div class="about__img"></div>
      <div class="container-block">
        <h1 class="about__title">Обо мне</h1>
        <div class="about__info about__info_inactive" data-elem="info">
          <i class="fas fa-arrow-circle-down about__arrow"></i>
          <span class="about__text">Показать...</span>
          <div class="about__desc">
            Тоже понравился лес <i class="fas fa-tree forest"></i> на заднем плане? По-моему красиво!
            А теперь к делу. В этом разделе нет ни километра букв, ни тонны <i class="fas fa-weight weights"></i> разных табличек.
            Есть скилы, от которых зависит, пригласите ли вы меня <i class="fas fa-handshake hands"></i>
            для интервью в мягкое кресло <i class="fas fa-couch chair"></i> вашей компании, где рядом на столе будет стоять чашечка
            ароматного кофе <i class="fas fa-coffee coffee-time"></i>. А в перерыве, пока будете совещаться, могу сыграть
            с тимлидом в партейку настольного тенниса (<i class="fas fa-exclamation-circle warning"></i> во время партии его нервное состояние
            может пошатнуться ).
          </div>
          <div class="avatar">
            <img class="avatar__img" src="./img/photo.jpg" alt="Avatar"/>
          </div>
        </div>
        <div class="skills">${skills.join('')}</div>
      </div>
    </ы>
  `
};


export default renderAbout;