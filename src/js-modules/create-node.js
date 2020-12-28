const createNode = (elem,classNames,child,parent,...dataAttr) => {
  let element = null;
  // elem
  element = document.createElement(elem);

  // classNames
  if(classNames) {
    element.classList.add(...classNames.split(' '));
  }

  // child
  if(child && Array.isArray(child)) {
    child.forEach(childElem => childElem && element.append(childElem));
  } else if (child && typeof child === 'object') {
    element.append(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }

  // parent
  if(parent) {
    parent.append(element);
  }

  // dataAttr
  if(dataAttr.length) {
    dataAttr.forEach(([attrName,attrValue]) => {
      if(attrValue === '') {
        element.setAttribute(attrName, '')
      } else {
        if(attrName.match(/id|title|value|name|type|placeholder|src|cols|rows|for|data/gi)) {
          element.setAttribute(attrName,attrValue)
        } else {
          element.dataset[attrName] = attrValue;
        }
      }
    })
  }

  return element;
};


export default createNode;