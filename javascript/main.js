// constants and variables

const display     = document.querySelector('.calculator__display');
const deleteBtn   = document.querySelector('#delete');
const acBtn       = document.querySelector('#ac');
const dotBtn      = document.querySelector('#dot');
const equalsBtn   = document.querySelector('#equals');
const addBtn      = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn   = document.querySelector('#divide');
const zeroBtn     = document.querySelector('#zero');
const oneBtn      = document.querySelector('#one');
const twoBtn      = document.querySelector('#two');
const threeBtn    = document.querySelector('#three');
const fourBtn     = document.querySelector('#four');
const fiveBtn     = document.querySelector('#five');
const sixBtn      = document.querySelector('#six');
const sevenBtn    = document.querySelector('#seven');
const eightBtn    = document.querySelector('#eight');
const nineBtn     = document.querySelector('#nine');

// listeners

zeroBtn.addEventListener('click', () => {
  display.textContent += zeroBtn.textContent;
});

oneBtn.addEventListener('click', () => {
  display.textContent += oneBtn.textContent;
});

twoBtn.addEventListener('click', () => {
  display.textContent += twoBtn.textContent;
});

threeBtn.addEventListener('click', () => {
  display.textContent += threeBtn.textContent;
});

fourBtn.addEventListener('click', () => {
  display.textContent += fourBtn.textContent;
});

fiveBtn.addEventListener('click', () => {
  display.textContent += fiveBtn.textContent;
});

sixBtn.addEventListener('click', () => {
  display.textContent += sixBtn.textContent;
});

sevenBtn.addEventListener('click', () => {
  display.textContent += sevenBtn.textContent;
});

eightBtn.addEventListener('click', () => {
  display.textContent += eightBtn.textContent;
});

nineBtn.addEventListener('click', () => {
  display.textContent += nineBtn.textContent;
});

acBtn.addEventListener('click', () => {
  display.textContent = '';
});

deleteBtn.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
});

addBtn.addEventListener('click', () => {
  display.textContent += '+';
});

subtractBtn.addEventListener('click', () => {
  display.textContent += '-';
});

multiplyBtn.addEventListener('click', () => {
  display.textContent += '*';
});

divideBtn.addEventListener('click', () => {
  display.textContent += '/';
});

// functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, op, b) {
  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'INVALID';
  }
}
