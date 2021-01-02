const locationResolver = (selector, location) => {
  switch(location) {
    case '#/about/':
      selector.innerHTML = `
        <h1 class="about">About</h1>
        <p class="about__text">This is a page about me!</p>
      `
      document.title = 'About';
      break;
    case '#/portfolio/':
      selector.innerHTML = `
        <h1 class="about">Portfolio</h1>
        <p class="about__text">This is a portfolio page</p>
      `
      document.title = 'Portfolio';
      break;
    case '#/contact/':
      selector.innerHTML = `
        <h1 class="about">Contact</h1>
        <p class="about__text">This is a contact page</p>
      `
      document.title = 'Contact';
      break;
  }
};


export default locationResolver;