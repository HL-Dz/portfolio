import renderMain from "./main/main-content.js";
import renderPortfolio from "./portfolio/portfolio-content.js";
import renderAbout from "./about/about-content.js";
import renderContact from "./contact/contact-content.js";

const locationResolver = (selector, location) => {
  switch (location) {
    case "#/":
      const mainContent = renderMain();
      selector.innerHTML = mainContent;
      document.title = "Главная";
      break;
    case "#/skills/":
      const aboutContent = renderAbout();
      selector.innerHTML = aboutContent;
      document.title = "Навыки";
      break;
    case "#/portfolio/":
      const portfolioContent = renderPortfolio();
      selector.innerHTML = portfolioContent;
      document.title = "Портфолио";
      break;
    case "#/contact/":
      const contactContent = renderContact();
      selector.innerHTML = contactContent;
      document.title = "Контакты";
      break;
  }
};

export default locationResolver;
