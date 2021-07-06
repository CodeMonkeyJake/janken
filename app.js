


const playerSelection = prompt('choose "Rock", "Paper" or "Scissors"');




const computerSelection = function () {
let randomNumber = Math.floor(Math.random() * 3);
switch(randomNumber) {
    case 0: 
    return 'ROCK';
    case 1: 
    return 'PAPER';
    case 2: 
    return 'SCISSORS';

}

}




function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "you tie"
    }

    if (
        (playerSelection === 'ROCK' || 'rock' || 'Rock' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' || 'paper' || 'Paper' & computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
    return 'you win!';
    }  
      if (
        (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')
    ) {
        return 'you lose!';
    }

}


const game = function() {
let i = 0
    while (i < 5) {
        
    }
}



// function getWinner(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//       return "tie";
//     }
//     if (
//       (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
//       (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
//       (playerSelection === "PAPER" && computerSelection === "ROCK")
//     ) {
//       return "player";
//     }
//     if (
//       (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
//       (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
//       (computerSelection === "PAPER" && playerSelection === "ROCK")
//     ) {
//       return "computer";
//     }
//   }


