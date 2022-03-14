const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

webgazer.setGazeListener((data,timestamp) =>{
    console.log(data,timestamp)
}).begin()
