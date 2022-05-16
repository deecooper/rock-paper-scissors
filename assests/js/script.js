let computerChoice = document.getElementById("computer-choice");
let playerChoice = document.getElementById("player-choice");
let score = document.getElementById("score");
let choices = document.querySelectorAll("button");
let playerSelection;

choices.forEach(choice => choice.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    playerChoice.innerHTML = playerSelection;

}
));

function computerSelection() {
    let randomNumber = Math.random() * 3
}