
function getComputerChoice(){
 let choise =Math.random();
  return choise <= 0.34 ? 'rock' : choise  <= 0.67 ? 'paper' :  'scissors';
  
}



function playRound(playerSelection, getComputerChoice){
 
 if (playerSelection === 'rock' && getComputerChoice === 'paper') return 'you lose! paper beats rock';
 else if (playerSelection === 'rock' && getComputerChoice === 'scissors') return 'you win, great work';
 else if (playerSelection === 'paper' && getComputerChoice === 'rock') return 'you win, great work';
 else if (playerSelection === 'paper' && getComputerChoice === 'scissors') return 'you lose! scissors beats paper';
 else if (playerSelection === 'scissors' && getComputerChoice === 'paper') return 'you win, great work';
 else if (playerSelection === 'scissors' && getComputerChoice === 'rock') return 'you lose! rock beats scissors';
 else return "tie";
}
