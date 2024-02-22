/* add event listener for each key code */
window.addEventListener("keydown", (e) => {
  //use es6 template using backtick ` and take css attribute
  let audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!audio) return;
  audio.play();
});
/* 
rock scissor paper game with browser console.
getComputerChoice function that randomly gives rock scissors paper
*/
//start rock scissor paper game by clicking
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  const game = ["ROCK", "PAPER", "SCISSORS"];
  /* get random choice */
  const randomChoice = game[Math.floor(Math.random() * game.length)];
  return randomChoice;
}

/*playRound function
input from user rock, paper or scissors without case sensitivity
put this input to playerSelection
Compare with computerChoice
then return result*/
function playRound(playerSelection, computerSelection) {
  console.log("You choose " + playerSelection);
  console.log("Computer is " + computerSelection);
  let winner = "";
  if (playerSelection === computerSelection) {
    winner = "Draw";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerWins += 1;
    winner = "Player wins.";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerWins += 1;
    winner = "Computer wins.";
  }
  console.log(winner);
  console.log(playerWins);
  console.log(computerWins);
  updateScore(winner, playerWins, computerWins);
}
//update choices
function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "ROCK":
      playerChoice.textContent = "You choose rock.";
      break;
    case "PAPER":
      playerChoice.textContent = "You choose paper.";
      break;
    case "SCISSORS":
      playerChoice.textContent = "You choose scissors.";
      break;
  }
  switch (computerSelection) {
    case "ROCK":
      computerChoice.textContent = "Computer chooses rock.";
      break;
    case "PAPER":
      computerChoice.textContent = "Computer chooses paper.";
      break;
    case "SCISSORS":
      computerChoice.textContent = "Computer chooses scissors.";
      break;
  }
}
//update scores function
function updateScore(winner, playerWins, computerWins) {
  if (winner === "Player wins.") {
    whoWin.textContent = "Player wins.";
  } else if (winner === "Computer wins.") {
    whoWin.textContent = "Computer wins.";
  } else {
    whoWin.textContent = "Draw!";
  }
  playerScore.textContent = `Player: ${playerWins}`;
  computerScore.textContent = `Computer: ${computerWins}`;
}
//game ending
function isGameEnd() {
  return playerWins === 2 || computerWins === 2;
}
//restart game function
function restartGame() {
  playerWins = 0;
  computerWins = 0;
  winner.classList.remove("active");
  whoWin.textContent = "Let's Play the game!";
  playerChoice.textContent = "??";
  computerChoice.textContent = "??";
  playerScore.textContent = `Player: ${playerWins}`;
  computerScore.textContent = `Computer: ${computerWins}`;
}
//anouncing winner best of 3
function finalWinner() {
  winner.classList.add("active");
  if (playerWins === 2) {
    finalWin.textContent = `You won!`;
  } else {
    finalWin.textContent = `Computer won!`;
  }
}
/* function game()
calls playRound func
*/
function game(playerSelection, computerSelection) {
  if (isGameEnd()) {
    finalWinner();
    return;
  }
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
  if (isGameEnd()) {
    finalWinner();
    return;
  }
}

//start play
const rock = document.querySelector("#ROCK");
rock.addEventListener("click", () => {
  console.log(rock.id);
  const playerSelection = rock.id;
  const computerSelection = getComputerChoice();
  game(playerSelection, computerSelection);
});
const paper = document.querySelector("#PAPER");
paper.addEventListener("click", () => {
  console.log(paper.id);
  const playerSelection = paper.id;
  const computerSelection = getComputerChoice();
  game(playerSelection, computerSelection);
});
const scissors = document.querySelector("#SCISSORS");
scissors.addEventListener("click", () => {
  console.log(scissors.id);
  const playerSelection = scissors.id;
  const computerSelection = getComputerChoice();
  game(playerSelection, computerSelection);
});

//ui
const whoWin = document.getElementById("who-wins");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const playerScore = document.getElementById("player-scores");
const computerScore = document.getElementById("computer-scores");
const winner = document.getElementById("winner");
const finalWin = document.getElementById("final-winner");
const restart = document.getElementById("restart");

restart.addEventListener("click", restartGame);

//getPlayerSelection();
//const rounds = prompt("enter number of rounds.");
//game(rounds);

/*
old codes
function playRound (get) {
    let computerWins = 0;
    let playerWins = 0;
    let computerChoice = getComputerChoice;
    let playerSelection = get;
    playerSelection.toLowerCase();
    console.log("You choose " + playerSelection);
    console.log("Computer is " + computerChoice);
        if (playerSelection == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose, paper beats rock!");
                computerWins += 1;
            }
            else if (computerChoice == "scissors") {
                console.log("You win, rock beats scissors!");
                playerWins += 1;
            }
            else {
                console.log("Draw!");
            }
        }
        else if (playerSelection == "paper") {
            if (computerChoice == "scissors") {
                console.log("You lose, scissors beats paper!");
                computerWins += 1;
            }
            else if (computerChoice == "rock") {
                console.log("You win, paper beats rock!");
                playerWins += 1;
            }
            else {
                console.log("Draw!");
            }
        }
        else if (playerSelection == "scissors") {
            if (computerChoice == "rock") {
                console.log("You lose, rock beats scissors!");
                computerWins += 1;
            }
            else if (computerChoice == "paper") {
                console.log("You win, scissors beats paper!");
                playerWins += 1;
            }
            else {
                console.log("Draw!");
            }
        }
        else {
            console.log("Wrong input! Refresh to play again.");
            console.log("Computer wins " + computerWins + "times. You win " + playerWins + "times.");
        }
    }
    console.log("Computer wins " + computerWins + " times. You win " + playerWins + " times.");
    if (computerWins > playerWins) {
        console.log("Computer wins! Player is Sad!");
    }
    else if (playerWins > computerWins) {
        console.log("Congratulations! You win by " + (playerWins-computerWins) + " marks!");
    }
    else {
        console.log("Nobody wins!");
    }
*/

//Calculator project
//1.functions
function AddNumbers(x, y) {
  return x + y;
}
function SubtractNumbers(x, y) {
  return x - y;
}
function MultiplyNumbers(x, y) {
  return x * y;
}
function DivideNumbers(x, y) {
  return parseInt((x / y).toFixed(2));
}
var result = 0;
function Operation(x, y, expression) {
  var first = parseInt(x);
  var last = parseInt(y);

  if (expression === "+") {
    return AddNumbers(first, last);
  } else if (expression === "-") {
    return SubtractNumbers(first, last);
  } else if (expression === "x") {
    return MultiplyNumbers(first, last);
  } else {
    return DivideNumbers(first, last);
  }
}
//2.Numbers and firstNumber variables
var firstNumber = "";
var secondNumber = "";
var operatorType = "";
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (operatorType === "") {
      firstNumber += String(number.innerText);
      console.log("First number is ", firstNumber);
    } else {
      secondNumber += String(number.innerText);
      console.log("First number is ", firstNumber);
      console.log("Second number is ", secondNumber);
      //result = AddNumbers(parseInt(firstNumber), parseInt(secondNumber));
    }
  });
});
//3. Operators and Operator variables

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    operatorType = String(operator.innerText);
    console.log(operatorType);
  });
});
const clear = document.querySelector(".clear");
//4. equal operator
const equalOperator = document.querySelector(".equal");
equalOperator.addEventListener("click", () => {
  result = Operation(firstNumber, secondNumber, operatorType);
  console.log(result);
  firstNumber = result;
  operatorType = "";
  secondNumber = "";
  console.log(`First number becomes ${firstNumber}`);
  console.log(`Operator becomes ${operatorType}`);
  console.log(`Operator becomes ${secondNumber}`);
});
