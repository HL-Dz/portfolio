const generateLoader = () => {
  let template = `
  <div class="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`;
  const loader = document.createElement('div');
  loader.classList.add('content-loader');
  loader.innerHTML = template;
  return loader;
};

export default generateLoader;


