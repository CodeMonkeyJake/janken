






const computerSelection = function () {
// computer choices
    const  choices = ['ROCK','PAPER','SCISSORS']
const random = Math.floor(Math.random() * 3)
let compPick = choices[random]
return compPick
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "you tie"
    } else if (
        (playerSelection === 'ROCK'    && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER'  && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
    return 'you win!';
    }  else if (
        (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')
    ) {
        return 'you lose!';
    }


 }


 function game() {
     for (let i = 0; i < 5; i ++) {
const playerSelection = prompt('rock ,paper, scissors?')
const computerPick = computerSelection();
console.log(` the computer picks : ${computerPick}!`)
console.log(playRound(playerSelection.toUpperCase(),computerPick))

     }



 }

 game()

