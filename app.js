import { didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';

const submitButton = document.getElementById('submit');
const compPickSpan = document.getElementById('comp-pick-span');
const winSpan = document.getElementById('win-span');
const lossSpan = document.getElementById('loss-span');
const totalSpan = document.getElementById('total-span');
const drawSpan = document.getElementById('draw-span');
const resultMessage = document.getElementById('result-message');
const resetButton = document.getElementById('reset-button');
const buttonCount = document.getElementById('button-count');

// initialize state
let wins = 0;
let total = 0;
let draw = 0;

let count = 1;
// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {

    buttonCount.textContent = count++;

    total++;

    const randomPick = Math.ceil(Math.random() * 3);

    const computerPick = getRandomThrow(randomPick);

    //Store user input
    const checkedInput = document.querySelector('input[type="radio"]:checked');

    const userGuess = checkedInput.value;

    // const results = didUserWin(userGuess, computerPick);

    if (didUserWin(userGuess, computerPick) === 'lose') {
        resultMessage.textContent = 'You lost, womp womp;';
    }

    if (didUserWin(userGuess, computerPick) === 'won') {
        ++wins;
        resultMessage.textContent = 'You won, congrats!';
    }

    if (didUserWin(userGuess, computerPick) === 'draw') {
        ++draw;
        resultMessage.textContent = "It's a draw, try again.";
    }

    //Computer pick span
    compPickSpan.textContent = computerPick;

    //Wins, total, and losses span
    winSpan.textContent = wins;
    lossSpan.textContent = total - wins - draw;
    totalSpan.textContent = total;
    drawSpan.textContent = draw;

});

resetButton.addEventListener('click', () => {

    winSpan.textContent = '';
    lossSpan.textContent = '';
    totalSpan.textContent = '';
    drawSpan.textContent = '';
    compPickSpan.textContent = '';
    resultMessage.textContent = '';
    buttonCount.textContent = '';

});

