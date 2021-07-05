

function computerPlay() {
let randomNumber = Math.floor(Math.random() * 3);
switch(randomNumber) {
    case 0: 
    return 'ROCK';
    case 1: 
    return "PAPER";
    case 2: 
    return "SCISSORS"

}

}


function playRound(playerSelection, computerSelection) {

    if (playerSelection = 'ROCK' && computerSelection === 'SCISSORS') {
    return 'you win!'
    }
    

}


const playerSelection = 'ROCK'
const computerSelection = computerPlay()