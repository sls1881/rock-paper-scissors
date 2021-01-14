import { didUserWin } from './utils.js';

const submitButton = document.getElementById('submit');
const compPickSpan = document.getElementById('comp-pick-span');
const winSpan = document.getElementById('win-span');
const lossSpan = document.getElementById('loss-span');
const totalSpan = document.getElementById('total-span');
const resultMessage = document.getElementById('result-message');

// initialize state
let wins = 0;
let total = 0;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {

    total++;

    const randomPick = Math.ceil(Math.random() * 3);

    const compAnswer = didUserWin(randomPick);

    //Store user input
    const checkedInput = document.querySelector('input[type="radio"]:checked');

    const userGuess = checkedInput.value;

    //Computer pick span
    compPickSpan.textContent = compAnswer;

    //Wins, total, and losses span
    winSpan.textContent = wins;
    lossSpan.textContent = total - wins;
    totalSpan.textContent = total;

});

// didUserWin(userGuess, compAnswer);