// import functions and grab DOM elements
const submitButton = document.getElementById('submit');
const CompPickSpan = document.getElementById('comp-pick-span');
const winSpan = document.getElementById('win-span');
const lossSpan = document.getElementById('loss-span');
const totalSpan = document.getElementById('total-span');
const resultMessage = document.getElementById('result-message');
const checkInput = document.querySelector('input[type = "Radio"]:checked');

// initialize state
let wins = 0;
let total = 0;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {

    total++;

    cons computerPick = (Math.ceil(Math.random() * 3));

    resultMessage.textContent = `You ${}.`;

    if (computerPick === 1) {
        wins++;

    }
    cons userPick = 

    didUserWin(checkInput.value);

});