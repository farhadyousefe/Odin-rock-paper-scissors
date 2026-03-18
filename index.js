// Odin Rock Paper Scissors Game

console.log("Hello Odin");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let value = Math.floor(Math.random() * 3) + 1;
  let computerChoice = "";

  switch (value) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  //   console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let userInput = prompt("Please Select from (1, 2, 3):");
  let humanChoice = userInput.toLowerCase();
  //   console.log(humanChoice);
  return humanChoice;
}

function playRound(human, computer) {
  if (human === "rock" && computer === "scissors") {
    console.log("You Won, Rock cruches scissors");
    humanScore++;
  } else if (computer === "rock" && human === "scissors") {
    console.log("You Lose!, Rock cruches scissors");
    computerScore++;
  } else if (human === "scissors" && computer === "paper") {
    console.log("You Win! Scissors cut paper");
    humanScore++;
  } else if (computer === "scissors" && human === "paper") {
    console.log("You lose! Scissors cut paper");
    computerScore++;
  } else if (human === "paper" && computer === "rock") {
    console.log("You Win! paper cover rock");
    humanScore++;
  } else if (computer === "paper" && human === "rock") {
    console.log("You lose! paper cover rock");
    computerScore++;
  } else {
    console.log("it's a tie - No scores");
  }

  return { humanScore, computerScore };
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     let human = getHumanChoice();
//     let computer = getComputerChoice();

//     ({ humanScore, computerScore } = playRound(human, computer));
//     console.log(humanScore);
//     console.log(computerScore);
//   }

//   console.log("Final Scores:");
//   console.log("Human:", humanScore);
//   console.log("Computer:", computerScore);
// }

// playGame();

// ==============================================

const container = document.querySelector("#container");
const btnForRock = document.createElement("button");
const btnForPaper = document.createElement("button");
const btnForScissor = document.createElement("button");

btnForRock.textContent = "Rock";
btnForPaper.textContent = "Paper";
btnForScissor.textContent = "Scissor";

container.append(btnForRock, btnForPaper, btnForScissor);
