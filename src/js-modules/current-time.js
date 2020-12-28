// Generate the current time
const generateCurrentTime = () => {
  let obj = {
    time: new Date().toLocaleTimeString().slice(0,-3),
    date: new Date().toLocaleDateString(),
  }
  return obj;
}


export default generateCurrentTime;