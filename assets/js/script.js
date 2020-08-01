let playerarr = [];
let computerarr = [];
let isOneLife = false;
let isSuperSpeed = false;
let round;

const topRight = document.querySelector(".top-right-panel");
const topLeft = document.querySelector(".top-left-panel");
const bottomRight = document.querySelector(".bottom-left-panel");
const bottomLeft = document.querySelector(".bottom-right-panel");
const onelife = document.querySelector(".onelife");
const superSpeed = document.querySelector(".superSpeed");
const roundCounter = document.querySelector("#turn");

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
 computerarr.push(topLeft);
 topLeft.style.backgroundColor = "white";
 setTimeout(function(){topLeft.style.backgroundColor = "Yellow";},500);
}
function flashGreen(){
  computerarr.push(topRight);
 topRight.style.backgroundColor = "white";
 setTimeout(function(){topRight.style.backgroundColor = "Green";},500);
}
function flashBlue(){
computerarr.push(bottomLeft);
 bottomRight.style.backgroundColor = "white";
 setTimeout(function(){bottomRight.style.backgroundColor = "Blue";},500);
}
function flashRed(){
computerarr.push(bottomRight);
 bottomLeft.style.backgroundColor = "white";
 setTimeout(function(){bottomLeft.style.backgroundColor = "red";},500);
}
console.log(computerarr);

function alertYellow(){
  playerarr.push(topLeft)
  topLeft.style.backgroundColor = "white";
  setTimeout(function(){topLeft.style.backgroundColor = "Yellow";},400);
  computerarrVsPlayerarr()
};

function alertGreen(){
  playerarr.push(topRight)
  topRight.style.backgroundColor = "white";
  setTimeout(function(){topRight.style.backgroundColor = "Green";},400);
  computerarrVsPlayerarr()
};

function alertBlue(){
  playerarr.push(bottomLeft)
  bottomLeft.style.backgroundColor = "white";
  setTimeout(function(){bottomLeft.style.backgroundColor = "Blue";},400);
  computerarrVsPlayerarr()
};

function alertRed(){
  playerarr.push(bottomRight)
  bottomRight.style.backgroundColor = "white";
  setTimeout(function(){bottomRight.style.backgroundColor = "red";},400);
  computerarrVsPlayerarr()
};




function computerarrVsPlayerarr() {
    for (let i = 0; i < playerarr.length; ++i) {
        if (playerarr[i] === computerarr[i]) {
            // all good, continue

            const thisTheLastItem = (i === computerarr.length - 1)
            const hasThePlayerRepeatedTheWholeSequence = (computerarr.length === playerarr.length)
            if (thisTheLastItem && hasThePlayerRepeatedTheWholeSequence) {
                // set timeout so that button doesn't flash
                // as soon as sequence is completely correct
                setTimeout(flahsComputerSequons, 2 * 1000)
            }
        } else {
            topLeft.style.backgroundColor = "white";
            topRight.style.backgroundColor = "white";
            bottomLeft.style.backgroundColor = "white";
            bottomRight.style.backgroundColor = "white";
            setTimeout(function() {
                topLeft.style.backgroundColor = "Yellow";
            }, 1000);
            setTimeout(function() {
                topRight.style.backgroundColor = "Green";
            }, 1000);
            setTimeout(function() {
                bottomLeft.style.backgroundColor = "Blue";
            }, 1000);
            setTimeout(function() {
                bottomRight.style.backgroundColor = "red";
            }, 1000);
        }
    }
}

function flahsComputerSequons() {
    turn++;
    roundCounter.innerHTML = turn;
    let i = 0
    for (i = 0; i < computerarr.length; ++i) {
        const item = computerarr[i];
            setTimeout(function() {
                flashButton(item)
            }, i * 800)
    }
    setTimeout(newRound, i * 1000)
}

function flashButton(buttonElement, delay) {
    buttonElement.classList.add('flashing')
        setTimeout(function() {
            buttonElement.classList.remove('flashing')
        }, 800)
    }




console.log(playerarr);

