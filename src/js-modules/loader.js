const generateLoader = () => {
  let template = `
    <div class="loader">
      <div class="dash uno"></div>
      <div class="dash dos"></div>
      <div class="dash tres"></div>
      <div class="dash cuatro"></div>
    </div>
  `;

  const loader = document.createElement('div');
  loader.classList.add('container-loader');
  loader.innerHTML = template;
  return loader;
}

export default generateLoader;


