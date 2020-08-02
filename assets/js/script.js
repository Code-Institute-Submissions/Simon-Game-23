let playerarr = [];
let computerarr = [];
let isOneLife = false;
let isSuperSpeed = false;
let round;

const topRight = document.querySelector(".top-right-panel");
const topLeft = document.querySelector(".top-left-panel");
const bottomRight = document.querySelector(".bottom-right-panel");
const bottomLeft = document.querySelector(".bottom-left-panel");
const onelife = document.querySelector(".onelife");
const superSpeed = document.querySelector(".superSpeed");
const roundCounter = document.querySelector("#turn");


onelife.addEventListener("click", (event) => {
    if (onelife.checked == true) {
        isOneLife = true
    } else {
        isOneLife = false;
    }
})

superSpeed.addEventListener("click", (event) => {
    if (superSpeed.checked == true) {
        isOneLife = true
    } else {
        superSpeed = false;
    }
})

function gamestart() {
    startButton.style.display = 'none';
    bottomLeft.style.display = 'inline-block';
    bottomRight.style.display = 'inline-block';
    topRight.style.display = 'inline-block';
    topLeft.style.display = 'inline-block';
    turn = 1;
    roundCounter.innerHTML = 1;
    setTimeout(function() {
        newRound();
    }, 1000);
};

function getRandomPanel() {
    const panels = [topLeft, topRight, bottomLeft, bottomRight];
    return panels[Math.floor(Math.random() * panels.length)];
}

console.log(getRandomPanel())

function newRound() {
    playerarr = []
    flashColour()
}

// This is the function that
// will cause a new color to be added to
// the computerarray and for that color
// to be flashed.
function flashColour() {
    const chosenElement = getRandomPanel();
    if (chosenElement == topLeft) {
        isComputerPlayingSequence = true;
        flash(topLeft)
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


function flash(element) {
  
    let originalColor = element.style.background;
    element.style.background = 'white';
    // wait here
    element.style.background = originalColor;
}






console.log(computerarr);

function flashYellow() {
    computerarr.push(topLeft);
    topLeft.style.backgroundColor = "white";
    setTimeout(function() {
        isComputerPlayingSequence = false;
    }, 400);
    if (superSpeed == true) {
        setTimeout(function() {
            topLeft.style.backgroundColor = "Yellow";
        }, 400);
    } else {
        setTimeout(function() {
            topLeft.style.backgroundColor = "Yellow";
        }, 800);
    };
};

function flashGreen() {
    computerarr.push(topRight);
    topRight.style.backgroundColor = "white";
    setTimeout(function() {
        isComputerPlayingSequence = false;
    }, 400);
    if (superSpeed == true) {
        setTimeout(function() {
            topRight.style.backgroundColor = "Green";
        }, 400);
    } else {
        setTimeout(function() {
            topRight.style.backgroundColor = "Green";
        }, 800);
    };
};

function flashBlue() {
    computerarr.push(bottomLeft);
    bottomLeft.style.backgroundColor = "white";
    setTimeout(function() {
        isComputerPlayingSequence = false;
    }, 400);
    if (superSpeed == true) {
        setTimeout(function() {
            bottomLeft.style.backgroundColor = "Blue";
        }, 400);
    } else {
        setTimeout(function() {
            bottomLeft.style.backgroundColor = "Blue";
        }, 800);
    };
};

function flashRed() {
    computerarr.push(bottomRight);
    bottomRight.style.backgroundColor = "white";
    setTimeout(function() {
        isComputerPlayingSequence = false;
    }, 400);
    if (superSpeed == true) {
        setTimeout(function() {
            bottomRight.style.backgroundColor = "red";
        }, 800);
    } else {
        setTimeout(function() {
            bottomRight.style.backgroundColor = "red";
        }, 400);
    };
};


function alertYellow() {
    if (isComputerPlayingSequence ^= true) {
        return
    } else {
        playerarr.push(topLeft)
        topLeft.style.backgroundColor = "white";
        setTimeout(function() {
            topLeft.style.backgroundColor = "Yellow";
        }, 400);
        computerarrVsPlayerarr()
    };
};

function alertGreen() {
    if (isComputerPlayingSequence ^= true) {
        return
    } else {
        playerarr.push(topRight)
        topRight.style.backgroundColor = "white";
        setTimeout(function() {
            topRight.style.backgroundColor = "Green";
        }, 400);
        computerarrVsPlayerarr()
    };
};

function alertBlue() {
    if (isComputerPlayingSequence ^= true) {
        return
    } else {
        playerarr.push(bottomLeft)
        bottomLeft.style.backgroundColor = "white";
        setTimeout(function() {
            bottomLeft.style.backgroundColor = "Blue";
        }, 400);
        computerarrVsPlayerarr()
    };
};

function alertRed() {
    if (isComputerPlayingSequence ^= true) {
        return
    } else {
        playerarr.push(bottomRight)
        bottomRight.style.backgroundColor = "white";
        setTimeout(function() {
            bottomRight.style.backgroundColor = "red";
        }, 400);
        computerarrVsPlayerarr()
    };
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
            setTimeout(function() {
                if (onelife == true) {
                    computerarr = [];
                    newRound();
                    round = 0;
                } else {
                    let i = 0
                    for (i = 0; i < computerarr.length; ++i) {
                        const item = computerarr[i];
                        setTimeout(function() {
                            flashButton(item)
                        }, i * 1000)
                    }
                }
            }, 1500);
        }
    }
}

function flahsComputerSequons() {
    turn++;
    roundCounter.innerHTML = turn;
    let i = 0
    for (i = 0; i < computerarr.length; ++i) {
        const item = computerarr[i];
        if (superSpeed) {
            setTimeout(function() {
                flashButton(item)
            }, i * 400)
        } else {
            setTimeout(function() {
                flashButton(item)
            }, i * 800)
        }
    }
    setTimeout(newRound, i * 1000)
}

function flashButton(buttonElement, delay) {
    buttonElement.classList.add('flashing')
    if (superSpeed) {
        setTimeout(function() {
            buttonElement.classList.remove('flashing')
        }, 400)
    } else {
        setTimeout(function() {
            buttonElement.classList.remove('flashing')
        }, 800)
    }
}



console.log(playerarr);