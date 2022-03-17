//Functions Practice

const getUserChoice = userChoice => {
  userChoice = userChoice.toLowerCase();
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissor') {
    return userChoice
  }
  else {
    console.log('Error, must input one of the following: rock, paper, or scissor.')
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1: 
      return 'paper';
    case 2:
      return 'scissor';
    break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie!';
  }
  else if (userChoice === 'rock') {
    if (computerChoice ==='paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  else if (userChoice === 'paper') {
    if (computerChoice ==='scissor') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  else if (userChoice === 'scissor') {
    if (computerChoice ==='rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  } if (userChoice === 'bomb') {
    return 'Bomb! You won!'
  }
};

console.log(determineWinner('paper', 'scissor'));
console.log(determineWinner('paper', 'paper')); 
console.log(determineWinner('paper', 'rock')); 
console.log(determineWinner('bomb', 'rock')); 
