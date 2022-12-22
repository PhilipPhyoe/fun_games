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
//const round = prompt("Enter number of rounds.");
//playRound(round);
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is text-content.";
container.appendChild(content);
const paragraph = document.createElement('p');
paragraph.textContent = "This is red words."
paragraph.style.color = "Red";
const headerOne = document.getElementById("h1");
const body = document.querySelector("#body");
const headerThree = document.createElement("h3");
headerThree.textContent = "I am a blue h3.";
headerThree.style.color = "blue";
body.appendChild(headerThree);
body.appendChild(paragraph);
const box = document.createElement("div");
box.style.border = "1px solid black";
box.style.background = "pink";
box.style.padding = "10px";
body.appendChild(box);
const headerFour = document.createElement("h4");
headerFour.textContent = "another header in div.";
headerFour.style.color = "purple";
box.appendChild(headerFour);
const paragraphTwo = document.createElement("p");
paragraphTwo.textContent = "Me too!";
paragraphTwo.style.color = "green";
box.appendChild(paragraphTwo);
const button = document.createElement("button");
button.onclick = "alertFunction()";
button.textContent = "Click Me!";
box.appendChild(button);
button.addEventListener("click", () => {alert("Yes, it is.");});
button.addEventListener("click", (e) => {e.target.style.background = "blue";});