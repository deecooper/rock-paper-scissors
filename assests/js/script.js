let computerChoiceDisplay = document.getElementById("computer-choice");
let playerChoice = document.getElementById("player-choice");
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("computer-score");

let resultDisplay = document.getElementById("result")
let choices = document.querySelectorAll("button");
let scoreDisplay = document.getElementById("score")
let playerSelection;
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

choices.forEach(choice => choice.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    playerChoice.innerHTML = playerSelection;
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
    if (playerSelection === "rock") {
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

    if (playerSelection === "paper") {
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

    if (playerSelection === "scissors") {
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
        window.location.replace("game-finished.html");
   
    } else if (playerScore < 10 && computerScore === 10){
        gameCompleted = true;
        window.location.replace("game-finished.html");
    }

}