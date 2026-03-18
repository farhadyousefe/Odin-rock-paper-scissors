// Odin Rock Paper Scissors Game

console.log("Hello Odin");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let value = Math.floor(Math.random() * 3) + 1;
  let computerChoice = "";

  switch (value) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
  }
  //   console.log(computerChoice);
  return computerChoice;
}

// function getHumanChoice() {
//   let userInput = prompt("Please Select from (1, 2, 3):");
//   let humanChoice = userInput.toLowerCase();
//   //   console.log(humanChoice);
//   return humanChoice;
// }

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    return `it's a tie! Both chose ${humanChoice}`;
  }
  if (
    (humanChoice === "Rock" && computerChoice === "Scissor") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissor" && computerChoice === "Paper")
  ) {
    humanScore++;
    return `You wil! ${humanChoice} beats ${computerChoice}`;
  } else {
    computer++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
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

const resultDiv = document.createElement("div");
container.after(resultDiv);

btnForRock.addEventListener("click", () => {
  resultDiv.textContent = "You chose Rock!\n";
  resultDiv.textContent += `\nYour Score ${humanScore}   vs.   Computer Score ${computerScore}`;
});

btnForPaper.addEventListener("click", () => {
  resultDiv.textContent = "You chose Paper!";
});

btnForScissor.addEventListener("click", () => {
  resultDiv.textContent = "You chose Scissor!";
});
