export const set = (name,value) => {
  localStorage.setItem(name, JSON.stringify(value));
}

export const get = (name, init = null) => {
  return JSON.parse(localStorage.getItem(name) || init);
}


export const del = (name) => {
  localStorage.removeItem(name);
}