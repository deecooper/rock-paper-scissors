let computerChoiceDisplay = document.getElementById("computer-choice");
let playerChoice = document.getElementById("player-choice");
let scores = document.getElementById("score");
let resultDisplay = document.getElementById("result")
let choices = document.querySelectorAll("button");
let scoreDisplay = document.getElementById("score")
let playerSelection;
let computerChoice;
let score = 0;
let result;

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
            score++;
        } else if (computerChoice === "paper") {
            result = "You lose";

        }

    }

    if (playerSelection === "paper") {
        if (computerChoice === "paper") {
            result = "Its a draw";
        } else if (computerChoice === "rock") {
            result = "You Won";
            score++;
        } else if (computerChoice === "scissors") {
            result = "You lose";

        }
    }

    if (playerSelection === "scissors") {
        if (computerChoice === "scissors") {
            result = "Its a draw";
        } else if (computerChoice === "paper") {
            result = "You Won";
            score++;
        } else if (computerChoice === "rock") {
            result = "You lose";

        }

    }

    resultDisplay.innerHTML = result;
    scoreDisplay.innerHTML = score;
}