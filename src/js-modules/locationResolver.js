import renderPortfolio from './portfolio/portfolio-content.js';
import renderAbout from './about/about-content.js';
import renderContact from './contact/contact.js';

const locationResolver = (selector, location) => {
  switch(location) {
    case '#/about/':
      const aboutContent = renderAbout();
      selector.innerHTML = aboutContent;
      document.title = 'Обо мне';
      break;
    case '#/portfolio/':
      const portfolioContent = renderPortfolio();
      selector.innerHTML = portfolioContent;
      document.title = 'Портфолио';
      break;
    case '#/contact/':
      const contactContent = renderContact();
      selector.innerHTML = contactContent;
      document.title = 'Контакты';
      break;
  }
};


export default locationResolver;