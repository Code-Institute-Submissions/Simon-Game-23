let order = [];
let playerOrder = [];
let turn;
let start = false;



const topLeft = document.querySelector('.top-left-panel');
const topRight = document.querySelector('.top-right-panel');
const bottomLeft = document.querySelector('.bottom-left-panel');
const bottomRight = document.querySelector('.bottom-right-panel');
const startButton = document.getElementById('startButton');



function gamestart(){
  startButton.style.display = 'none';
  bottomLeft.style.display = 'inline-block';
  bottomRight.style.display = 'inline-block';
  topRight.style.display = 'inline-block';
  topLeft.style.display = 'inline-block';
  }