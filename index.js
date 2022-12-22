/*rock scissor paper game with browser console.
getComputerChoice function that randomly gives rock scissors paper

*/
function getComputerChoice () {
    const game = ["rock","paper","scissors"];
    const randomChoice = game[Math.floor(Math.random()*game.length)];
    return randomChoice
}
//console.log(getComputerChoice());
/*playRound function
input from user rock, paper or scissors without case sensitivity
put this input to playerSelection
Compare with computerChoice
then return result*/
function playRound (round) {
    let computerWins = 0;
    let playerWins = 0;
    for (let i = 1; i <= round; i++) {
        let computerChoice = getComputerChoice();
        let playerSelection = prompt("Enter your choice, paper or rock or scissors!");
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
}
const round = prompt("Enter number of rounds.");
playRound(round);