const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const userSelect = document.getElementById('user_select');
const computerSelect = document.getElementById('computer_select');
const result = document.getElementById('result');

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');


const choices = ['paper', 'rock', 'scissors'];


//console.log(pickRandomChoises());
let score = 0;
let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        
        validateWinner();
    })
});


reset.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
})

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
function validateWinner() {
    const computerChoice = pickRandomChoises();

    updateSelection(userSelect,userChoice);
    updateSelection(computerSelect,computerChoice);

    if (userChoice === computerChoice) {
        result.innerText='draw'
    } else if
        (userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice == 'sicssots' && computerChoice === 'paper') {
            updateScore(1);
            result.innerText = 'win';
    }else{

        updateScore(-1);
        result.innerText = 'lost'
    }

    main.style.display = 'none';
    selection.style.display = 'flex';
}

function updateScore(value) {
    score += value;
    scoreEl.innerText = score;
}

function pickRandomChoises() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice){
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-scissors');
    selectionEl.classList.remove('btn-rock');

    const img = selectionEl.querySelector('img'); 
    selectionEl.classList.add(`btn-${choice}`)
    img.src = `./images/icon-${choice}.svg`;
    img.alt = choice;
}
