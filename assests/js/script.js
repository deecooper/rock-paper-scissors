let computerChoiceDisplay = document.getElementById("computer-choice");
let playerChoice = document.getElementById("player-choice");
let result = document.getElementById("score");
let choices = document.querySelectorAll("button");
let playerSelection;
let computerChoice;
let score = 0;

let gameIcons = {
    rock: "./images/rock.png",
    scissors: "./images/scissors.png",
    paper: "./images/paper.png"
};

choices.forEach(choice => choice.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    playerChoice.innerHTML = playerSelection;
    computerSelection()

}
));


function computerSelection() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if(randomNumber === 1){
        computerChoice = "rock";
    }
    else if(randomNumber === 2){
        computerChoice = "paper";

    }
    else if (randomNumber === 3){
        computerChoice = "scissors";

    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (user === "rock"){
        if (computerChoice === "rock"){
            return "Its a draw";
        } else if (computerChoice === "scissors"){
            return "You Won";
            score ++;
        } else if (computerChoice === "paper") {
            return "You lose";
      
        }

    }

        if (user === "paper"){
            if (computerChoice === "paper"){
                return "Its a draw";
            } else if (computerChoice === "rock"){
                return "You Won";
                score ++;
            } else if (computerChoice === "scissors") {
                return "You lose";
          
            }
        }

        if (user === "scissors"){
            if (computerChoice === "scissors"){
                return "Its a draw";
            } else if (computerChoice === "paper"){
                return "You Won";
                score ++;
            } else if (computerChoice === "rock") {
                return "You lose";
          
            }
        }
 

}
