const ROCK = document.querySelector('.rock')
const PAPER = document.querySelector('.paper')
const SCISSORS = document.querySelector('.scissors')
const resetbtn = document.querySelector('.reset')


const reset = function() {
    
        playerScore = 0
        computerScore = 0
        document.querySelector('.p1Score').textContent = playerScore
        document.querySelector('.compScore').textContent = playerScore
}

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


let playerScore = 0
let computerScore = 0


  ROCK.addEventListener('click', () => {
if (playRound('ROCK', computerSelection()) === 'you win!') {
    playerScore += 1 
    document.querySelector('.p1Score').textContent = playerScore
    document.querySelector('.gameStatus').textContent = 'you win!'
    document.querySelector('.gameStatus').style.color = 'green'
    

} else if(playRound('ROCK', computerSelection()) === 'you lose!') {
    computerScore += 1
    document.querySelector('.compScore').textContent = computerScore;
    document.querySelector('.gameStatus').textContent = 'you lose!';
    document.querySelector('.gameStatus').style.color = 'red'
}
else {
    document.querySelector('.gameStatus').textContent = 'tie!'
    document.querySelector('.gameStatus').style.color = 'black'
} 
if(playerScore === 5 ) {
    document.querySelector('.gameStatus').textContent = 'game over, player 1 wins!'
        reset()
} else if(computerScore === 5) {
    document.querySelector('.gameStatus').textContent = 'your pathetic, computer wins!'
    reset()
}


  })

    PAPER.addEventListener('click', () => {
        if (playRound('PAPER', computerSelection()) === 'you win!') {
            playerScore += 1 
            document.querySelector('.p1Score').textContent = playerScore
            document.querySelector('.gameStatus').textContent = 'you win!'
            document.querySelector('.gameStatus').style.color = 'green'
            
        
        } else if(playRound('PAPER', computerSelection()) === 'you lose!') {
            computerScore += 1
            document.querySelector('.compScore').textContent = computerScore;
            document.querySelector('.gameStatus').textContent = 'you lose!';
            document.querySelector('.gameStatus').style.color = 'red'
        }
        else {
            document.querySelector('.gameStatus').textContent = 'tie!'
            document.querySelector('.gameStatus').style.color = 'black'
        }
        if(playerScore === 5 ) {
            document.querySelector('.gameStatus').textContent = 'game over, player 1 wins!'
            reset()
        } else if(computerScore === 5) {
            document.querySelector('.gameStatus').textContent = 'your pathetic, computer wins!'
            reset()    
        }
   
})

        SCISSORS.addEventListener('click', () => {
            if (playRound('SCISSORS', computerSelection()) === 'you win!') {
                playerScore += 1 
                document.querySelector('.p1Score').textContent = playerScore
                document.querySelector('.gameStatus').textContent = 'you win!'
                document.querySelector('.gameStatus').style.color = 'green'
            
            } else if(playRound('SCISSORS', computerSelection()) === 'you lose!') {
                computerScore += 1
                document.querySelector('.compScore').textContent = computerScore;
                document.querySelector('.gameStatus').textContent = 'you lose!';
                document.querySelector('.gameStatus').style.color = 'red'
            }
            else {
                document.querySelector('.gameStatus').textContent = 'tie!'
                document.querySelector('.gameStatus').style.color = 'black'
            }
        
            if(playerScore === 5 ) {
                document.querySelector('.gameStatus').textContent = 'game over, player 1 wins!'
                reset()
            } else if(computerScore === 5) {
                document.querySelector('.gameStatus').textContent = 'your pathetic, computer wins!'
                reset()
            }
   
})


resetbtn.addEventListener('click', () => {
    reset()
}
)


//  function game() {
//      for (let i = 0; i < 5; i ++) {
// const playerSelection = prompt('rock ,paper, scissors?')
// const computerPick = computerSelection();
// console.log(` the computer picks : ${computerPick}!`)
// console.log(playRound(playerSelection.toUpperCase(),computerPick))

//      }



//  }

//  game()

