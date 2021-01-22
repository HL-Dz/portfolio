// Вставляет элемент в нужное место
Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
};

// Заглушка
const noop = () => {};

// Футер для модального окна
const _createModalFooter = (buttons = []) => {
  if(buttons.length === 0) {
    return document.createElement('div');
  }

  const wrap  = document.createElement('div')
  wrap.classList.add('modal-footer');
  buttons.forEach(button => {
    const $btn = document.createElement('button');
    $btn.textContent = button.text;
    $btn.classList.add(`${button.cls}`);
    $btn.onclick = button.handler || noop;

    wrap.append($btn);
  })
  return wrap;
};


// Генерирует контент модального окна
const _createModal = (options) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  let template = `
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <div class="modal-title">${options.title || 'Модальное окно'}</div>
        </div>
        <div class="modal-body" data-content>${options.content || ''}</div>
      </div>
    </div>`;
  modal.innerHTML = template;
  const footer = _createModalFooter(options.footerButtons);
  footer.appendAfter(modal.querySelector('[data-content]'));
  document.body.prepend(modal);
  return modal;
}

// Создает модальное окно
const modal = (options) => {
  const $modal = _createModal(options);
  const overlay = $modal.querySelector('.modal-overlay');

  const modal = {
    open(){
      overlay.classList.add('modal-overlay_visible');
    },
    close(){
      overlay.classList.remove('modal-overlay_visible');
    }
  }

  return Object.assign(modal, {
    setContent(html) {
      $modal.querySelector('[data-content]').innerHTML = html;
    }
  })
};


export default modal;