const ROCK = document.querySelector('.rock')
const PAPER = document.querySelector('.paper')
const SCISSORS = document.querySelector('.scissors')



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


let playerscore = 0



  ROCK.addEventListener('click', () => {
if (playRound('ROCK', computerSelection()) === 'you win!') {
    playerscore += 1 
    document.querySelector('.p1Score').textContent = playerscore

}
     
  })

    PAPER.addEventListener('click', () => {
    console.log(playRound('PAPER', computerSelection()))
   
})

        SCISSORS.addEventListener('click', () => {
    console.log(playRound('SCISSORS', computerSelection()))
   
})



//  function game() {
//      for (let i = 0; i < 5; i ++) {
// const playerSelection = prompt('rock ,paper, scissors?')
// const computerPick = computerSelection();
// console.log(` the computer picks : ${computerPick}!`)
// console.log(playRound(playerSelection.toUpperCase(),computerPick))

//      }



//  }

//  game()

