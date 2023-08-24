// constants and variables

const display      = document.querySelector('.calculator__display');
const deleteBtn    = document.querySelector('#delete');
const acBtn        = document.querySelector('#ac');
const dotBtn       = document.querySelector('#dot');
const equalsBtn    = document.querySelector('#equals');
const numberBtns   = document.querySelectorAll('.btn--number');
const operatorBtns = document.querySelectorAll('.btn--operator');

let firstNum;
let operator;
let secondNum;

// listeners



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
