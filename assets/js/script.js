let turn = 0;
let playerarr = [];
let computerarr = [];

const topRight = document.querySelector(".top-right-panel");
const topLeft = document.querySelector(".top-left-panel");
const bottomRight = document.querySelector(".bottom-left-panel");
const bottomLeft = document.querySelector(".bottom-right-panel");

function gamestart() {
    startButton.style.display = 'none';
    bottomLeft.style.display = 'inline-block';
    bottomRight.style.display = 'inline-block';
    topRight.style.display = 'inline-block';
    topLeft.style.display = 'inline-block';
    turn = 1;
    setTimeout(function() {
        newRound();
    }, 1000);
};


function newRound() {
    playerarr = []
    flashColour()
}

function getRandomPanel(){
const panels = [ topLeft, topRight, bottomLeft, bottomRight];
return item = panels[Math.floor(Math.random() * panels.length)];
}

function flashColour(){
const chosenElement = getRandomPanel();
if (chosenElement == topLeft) {
  isComputerPlayingSequence = true;
  flashYellow()
} else if (chosenElement == topRight) {
  isComputerPlayingSequence = true;
  flashGreen()
} else if (chosenElement == bottomLeft) {
  isComputerPlayingSequence = true;
  flashBlue()
} else {
  isComputerPlayingSequence = true;
  flashRed()
}
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

