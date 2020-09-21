/* to keep track of the players clicks */
let playerarr = [];
/* to keep track of the computers clicks */
let computerarr = [];
let isSuperSpeed = false;
let isOnelife = false;
let isUnlimitedRounds = false;
/* to reduce the amount of times the player can click whilst the computer is running the sequence */
let isComputerPlayingSequence = false;

const topRight = document.querySelector(".top-right-panel");
const topLeft = document.querySelector(".top-left-panel");
const bottomRight = document.querySelector(".bottom-right-panel");
const bottomLeft = document.querySelector(".bottom-left-panel");
const onelife = document.querySelector(".onelife");
const superSpeed = document.querySelector(".superSpeed");
const unlimitedRounds = document.querySelector(".unlimitedRounds");
const roundCounter = document.querySelector("#turn");

onelife.addEventListener("click", (event) => {
	if (onelife.checked == true) {
		isOnelife = true
	} else {
		isOnelife = false;
	}
})

superSpeed.addEventListener("click", (event) => {
	if (superSpeed.checked == true) {
		isSuperSpeed = true
	} else {
		isSuperSpeed = false;
	}
})

unlimitedRounds.addEventListener("click", (event) => {
	if (unlimitedRounds.checked == true) {
		isUnlimitedRounds = true
	} else {
		isUnlimitedRounds = false;
	}
})
/* two centre of the screen and to start the game */
function gamestart() {
	startButton.style.display = 'none';
	location.href = "https:#turn"
	bottomLeft.style.display = 'inline-block';
	bottomRight.style.display = 'inline-block';
	topRight.style.display = 'inline-block';
	topLeft.style.display = 'inline-block';
	turn = 1;
	roundCounter.innerHTML = 1;
	setTimeout(function () {
		newRound();
	}, 800);
};

/* randomly picks panel */
function getRandomPanel() {
	const panels = [topLeft, topRight, bottomLeft, bottomRight];
	return panels[Math.floor(Math.random() * panels.length)];
}
/* to be able to clear all the panels */
function clearPanels() {
	topRight.classList.remove('flashing')
	topLeft.classList.remove('flashing')
	bottomLeft.classList.remove('flashing')
	bottomRight.classList.remove('flashing');
}
/* clears player array, clears all of the panles and updates the level counter*/
function newRound() {
	roundCounter.innerHTML = turn;
	clearPanels()
	playerarr = []
	flashColour()
}

/* This is the function that will cause a new color to be added to the computerarray and for that color to be flashed. */
function flashColour() {
	const chosenElement = getRandomPanel();
	if (chosenElement == topLeft) {
		isComputerPlayingSequence = true;
		flashcomputer(topLeft)
	} else if (chosenElement == topRight) {
		isComputerPlayingSequence = true;
		flashcomputer(topRight)
	} else if (chosenElement == bottomLeft) {
		isComputerPlayingSequence = true;
		flashcomputer(bottomLeft)
	} else {
		isComputerPlayingSequence = true;
		flashcomputer(bottomRight)
	}
}

/* to change the colour of the random panel generated from the getRandomPanel */
function flashcomputer(element) {
	isComputerPlayingSequence = true
	let originalColor = element.style.background;
	computerarr.push(element)
	element.style.background == element.classList.add('flashing')
	if (isSuperSpeed == true) {
		setTimeout(function () {
			clearPanels();
		}, 400);
		isComputerPlayingSequence = false
	} else {
		setTimeout(function () {
			clearPanels();
		}, 800);
		isComputerPlayingSequence = false
	}
}

/* to change the colour of the player */
function flashplayer(element) {
	if (isComputerPlayingSequence == true) {
		return
	} else {
		let originalColor = element.style.background;
		playerarr.push(element)
		computerarrVsPlayerarr()
		element.style.background == element.classList.add('flashing')
		if (isSuperSpeed == true) {
			setTimeout(function () {
				clearPanels();
			}, 400);
			isComputerPlayingSequence = false
		} else {
			setTimeout(function () {
				clearPanels();
			}, 800);
			isComputerPlayingSequence = false
		}
	}
}

function computerarrVsPlayerarr() {
	for (let i = 0; i < playerarr.length; ++i) {
		if (playerarr[i] === computerarr[i]) {
			/* if the player can get the same sequence as the computer */

			const thisTheLastItem = (i === computerarr.length - 1)
			/* to set thisTheLastItem to 1 less as the computer array */
			const hasThePlayerRepeatedTheWholeSequence = (computerarr.length === playerarr.length)
			if (thisTheLastItem && hasThePlayerRepeatedTheWholeSequence) {
				/* to check if it is the last panel to compare with computer vs player */
				setTimeout(flahsComputerSequons, 2000)
			}
		} else {
			roundCounter.innerHTML = "Incorrect";
			topLeft.classList.add('flashing')
			topRight.classList.add('flashing')
			bottomLeft.classList.add('flashing')
			bottomRight.classList.add('flashing')
			setTimeout(function () {
				clearPanels()
			}, 1000);
			/* to be able to reroute the function for one life */
			if (isOnelife == true) {
				computerarr = [];
				turn = 1;
				setTimeout(function () {
					newRound();
				}, 2000);
			} else {
				setTimeout(function () {
					clearPanels()
					roundCounter.innerHTML = turn;
					playerarr = [];
					let i = 0
					for (i = 0; i < computerarr.length; ++i) {
						const item = computerarr[i];
						setTimeout(function () {
							flashButton(item)
						}, i * 1100)
					}
				}, 1000)
			}
		}
	}
}


function flahsComputerSequons() {
	turn++;
	/* to be able to stop the game at level 21 or continue forever */
	if (turn == 21 && isUnlimitedRounds == false) {
		roundCounter.innerHTML = "Winner";
		let x = 0
		for (x = 0; x < 5; x++) {
			setTimeout(function () {
				topLeft.classList.add('flashing')
				topRight.classList.add('flashing')
				bottomLeft.classList.add('flashing')
				bottomRight.classList.add('flashing')
				console.log("flashing")
				setTimeout(function () {
					clearPanels()
					console.log("nonflashing")
				}, 800);
			}, x * 1000)
		}
		return;
	}

	roundCounter.innerHTML = turn;
	let i = 0
	for (i = 0; i < computerarr.length; ++i) {
		const item = computerarr[i];
		if (isSuperSpeed) {
			setTimeout(function () {
				flashButton(item)
			}, i * 1000)
		} else {
			setTimeout(function () {
				flashButton(item)
			}, i * 1800)
		}
	}
	/* to get the game to continue after the flashing has been completed */
	if (isSuperSpeed) {
		setTimeout(newRound, i * 1000)
	} else {
		setTimeout(newRound, i * 1800)
	}
}
/* add the style function to change the colours of the panel */
function flashButton(buttonElement) {
	buttonElement.classList.add('flashing')
	if (isSuperSpeed) {
		setTimeout(function () {
			buttonElement.classList.remove('flashing')
		}, 400)
	} else {
		setTimeout(function () {
			buttonElement.classList.remove('flashing')
		}, 800)
	}
}