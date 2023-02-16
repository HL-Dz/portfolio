import contacts from "./contact-data.js";

const renderContact = () => {
  const allContacts = contacts.map((el) => {
    let isWindow = el.isOpen;
    return `
    <a class="communication" href="${el.contactLink}" ${
      isWindow ? 'target="_blank"' : ""
    }>
      <div class="communication__block">
        <div class="communication__title" data-type="title-el">${el.title}</div>
        
      </div>
      <div class="communication__pic">
        <img class="communication__img" src="${el.contactImg}" alt="${
      el.title
    }"/>
      </div>
    </a>
    `;
  });

  return `
    <section class="contact">
      <div class="container-block center-block">
        <h1 class="contact__title">Контакты</h1>
        <div class="communications">${allContacts.join("")}</div>
      </div>
    </section>
  `;
};

export default renderContact;

{
  /* <div class="path">
          <a class="path__link" href="${el.contactLink}" ${isWindow ? 'target="_black"' : ''}>${isWindow ? 'Перейти' : 'Написать'}</a>
          <div class="path__close">
            <i class="fas fa-times-circle path__icon" data-close="contact"></i>
          </div>
        </div> */
}
