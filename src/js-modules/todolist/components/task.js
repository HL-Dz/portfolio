// Create new task
export const generateItem = ( elem ) => {
  let template = `
  <div class="item__confirm-modal" data-confirm="${elem.id}">
    <div class="confirm-text">Delete task?</div>
    <div class="confirm-buttons">
      <button class="confirm-btn" data-confirmed="${elem.id}">Ок</button>
      <button class="confirm-cancel">Cancel</button>
    </div>
  </div>
  <div class="item__completion-modal">
    <div class="completion-text">Complete task?</div>
    <div class="completion-buttons">
      <button class="completion-btn" data-action="${elem.id}">Ок</button>
      <button class="completion-cancel" data-elem="${elem.id}">Cancel</button>
    </div>
  </div>
  <div class="item__period">
    <div class="item__start">
      <div class="item__start-popup">Task added: ${elem.startTime.time} ${elem.startTime.date}</div>
      <div class="item__start-time">${elem.startTime.time}</div>
      <div class="item__start-date">${elem.startTime.date}</div>
    </div>
    <div class="${elem.checked ? "item__finish item__finish_display" : "item__finish"}">
      <div class="item__finish-popup">Task completed: ${elem.endTime.time} ${elem.endTime.date}
      </div>
      <div class="item__finish-time">${elem.endTime.time || ''}</div>
      <div class="item__finish-date">${elem.endTime.date || ''}</div>
    </div>
  </div>
  <label class="item__label" for="${elem.id}">
    <input
      class="item__input"
      type="checkbox"
      id="${elem.id}"
      ${elem.checked ? "checked" : "data-checked=false"}
      ${elem.disabled ? "disabled" : "data-disabled=false"}
    />
    <span class="${elem.checked ? "additional additional_active" : "additional"}"></span>
    <span
      class="${elem.checked ? "item__text item__text_inactive" : "item__text"}"
      title="${elem.checked ? "Task completed" : ""}"
    >${elem.todo}</span>
  </label>
  <div class="item__remove" data-remove="${elem.id}">
    <img class="item__remove-img" src="./img/delete.png" alt="Delete" />
  </div>
`
  const element = document.createElement('div');
  element.classList.add('item');
  element.setAttribute('data-elem', elem.id);
  element.innerHTML = template;
  return element;
};
