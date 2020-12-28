// The function generates an unique id
const generateId = () => {
  const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
  return id;
}


export default generateId;