let round = 0;
let playerarr = [];
let computerarr = [];

const topRight = document.querySelector(".top-right-panel");
const topLeft = document.querySelector(".top-left-panel");
const bottomRight = document.querySelector(".bottom-left-panel");
const bottomLeft = document.querySelector(".bottom-right-panel");
function getRandomPanel(){
const panels = [ topLeft, topRight, bottomLeft, bottomRight];
return item = panels[Math.floor(Math.random() * panels.length)];
}
const computerarr = [
  getRandomPanel()
]
if (computerarr == topLeft) {
  flashYellow();
} else if (computerarr == "topRight") {
  flashGreen();
} else if (computerarr == "bottom-left-panel") {
  flashBlue();
} else if (computerarr == "div.pannel.bottom-right-panel") {
  flashRed();
} else {
  console.log("error");
}
function flashYellow(){
 topLeft.style.backgroundColor = "white";
 setTimeout(function(){topLeft.style.backgroundColor = "Yellow";},500);
}
function flashGreen(){
 topRight.style.backgroundColor = "white";
 setTimeout(function(){topRight.style.backgroundColor = "Green";},500);
}
function flashBlue(){
 bottomRight.style.backgroundColor = "white";
 setTimeout(function(){bottomRight.style.backgroundColor = "Blue";},500);
}
function flashRed(){
 bottomLeft.style.backgroundColor = "white";
 setTimeout(function(){bottomLeft.style.backgroundColor = "red";},500);
}
console.log(computerarr);

