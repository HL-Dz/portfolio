const getModalContent = (elem) => {
  const techsElems = elem.techs.map(el => {
    return `
    <div class="techs__item">
      <img class="techs__img" src="${el}" alt="Technology">
    </div>
    `
  });

  return `
  <div class="work">
    <div class="work__title">${elem.title}</div>
    <div class="work__description">
      <div class="work__pic">
        <img class="work__img" src="${elem.imgPath}" alt="${elem.name}">
      </div>
      <div class="work__info">
        <div class="techs">
          <div class="techs__caption">Технологии:</div>
          <div class="techs__list">${techsElems.join('')}</div>
        </div>
        <div class="work__text">${elem.description || 'Информация отсутствует...'}</div>
      </div>
    </div>
  </div>
  `
};

export default getModalContent;