import skillsData from "./skills-data.js";

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
  `;
};

const renderAbout = () => {
  const skills = skillsData.map((skill) => {
    return getSkill(skill);
  });

  return `
    <section class="about">
      <div class="about__img"></div>
      <div class="container-block">
        <h1 class="about__title">Навыки</h1>
        <div class="skills">${skills.join("")}</div>
      </div>
    </section>
  `;
};

export default renderAbout;
