const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

webgazer.setGazeListener((data,timestamp) =>{
    //console.log(data,timestamp)
}).begin()

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    document.dispatchEvent(gazeMoveEvent);
  }, false);
