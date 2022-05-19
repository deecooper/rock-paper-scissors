//Global Variables
let computerChoiceDisplay = document.getElementById("computer-choice");
let playerChoiceDisplay = document.getElementById("player-choice");
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("computer-score");
let resultDisplay = document.getElementById("result")
let buttonChoices = document.querySelectorAll("button");
let scoreDisplay = document.getElementById("score")
let playerChoice;
let computerChoice;
let computerScore = 0;
let playerScore = 0;
let result;
let gameCompleted = false;

let gameIcons = {
    rock: "./images/rock.png",
    scissors: "./images/scissors.png",
    paper: "./images/paper.png"

};




//
buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    computerSelection();
    getResult();
    getScore();

}));


function computerSelection() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";

    } else if (randomNumber === 3) {
        computerChoice = "scissors";

    }
    computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult() {
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            result = "Its a draw";
        } else if (computerChoice === "scissors") {
            result = "You Won";
            playerScore++;
        } else if (computerChoice === "paper") {
            result = "You lose";
            computerScore++;

        }

    }

    if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            result = "Its a draw";
        } else if (computerChoice === "rock") {
            result = "You Won";
            playerScore++;
        } else if (computerChoice === "scissors") {
            result = "You lose";
            computerScore++;

        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "scissors") {
            result = "Its a draw";
        } else if (computerChoice === "paper") {
            result = "You Won";
            playerScore++;
        } else if (computerChoice === "rock") {
            result = "You lose";
            computerScore++;

        }

    }

    resultDisplay.innerHTML = result;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;

}


function getScore() {
    if (playerScore === 10 && computerScore < 10) {
        gameCompleted = true;
        result = "You Won the game";
        setTimeout(function () {

        window.location.replace("game-finished.html");
        }, 3000)
   
    } else if (playerScore < 10 && computerScore === 10){
        gameCompleted = true;
        result = "You Lost the game";
        setTimeout(function () {

            window.location.replace("game-finished.html");
            }, 2000)

    }

}