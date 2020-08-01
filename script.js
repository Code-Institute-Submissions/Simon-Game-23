let round = 0;
let playerarr = [];
let computerarr = [];

const topRight = document.querySelector(".top-right-panel");
const topLeft = document.querySelector(".top-left-panel");
const bottomRight = document.querySelector(".bottom-right-panel");
const bottomLeft = document.querySelector(".bottom-left-panel");


function gamestart(){
  startButton.style.display = 'none';
  bottomLeft.style.display = 'inline-block';
  bottomRight.style.display = 'inline-block';
  topRight.style.display = 'inline-block';
  topLeft.style.display = 'inline-block';
  setTimeout(function(){ flashColour(); }, 1000);
};

function getRandomPanel(){
const panels = [ topLeft, topRight, bottomLeft, bottomRight];
return panels[Math.floor(Math.random() * panels.length)];
}

console.log(getRandomPanel())

function flashedColuer(){
  getRandomPanel.push(computerarr)
};

console.log(computerarr)

