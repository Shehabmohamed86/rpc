let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
 let choise =Math.random();
  return choise <= 0.34 ? 'rock' : choise  <= 0.67 ? 'paper' :  'scissors';
}
function playRound(playerSelection, getComputerChoice){
 
 if (playerSelection === 'rock' && getComputerChoice === 'paper'){ computerScore ++
   return 'you lose good luck'
 
  }else if (playerSelection === 'rock' && getComputerChoice === 'scissors') { playerScore ++
    return 'you win, good job';
  
  }else if (playerSelection === 'paper' && getComputerChoice === 'rock') { playerScore++

   return 'you win, good job';
    
  }else if (playerSelection === 'paper' && getComputerChoice === 'scissors'){  computerScore++
    return 'you lose good luck';
    
   } else if (playerSelection === 'scissors' && getComputerChoice === 'paper') {playerScore++
  
    return 'you win, good job';
    
   }else if (playerSelection === 'scissors' && getComputerChoice === 'rock'){ computerScore++
    return 'you lose good luck'
    
   }else return "tie";
}


function game (){
  
  for (let i = 0; i <= 4; i++) {
   const playerSelection = prompt("what you select","'rock','paper','scissor'")

    console.log(playRound(playerSelection,getComputerChoice()))}
  
    if(playerScore > computerScore){
      console.log(`you win, player score:${playerScore} computerscore:${computerScore}`)
    } else if (playerScore < computerScore){
      console.log (`you lost, player score:${playerScore} computerscore:${computerScore}`)
    }else return 'tie'
     
}

  
console.log(game())


