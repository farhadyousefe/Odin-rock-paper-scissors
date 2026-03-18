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
    computerScore++;
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

// Rock Selection

btnForRock.addEventListener("click", () => {
  const result = playRound("Rock");
  resultDiv.innerHTML = "";

  const choiceLine = document.createElement("p");
  choiceLine.textContent = result;

  const scoreboard = document.createElement("div");
  scoreboard.classList.add("scoreboard");

  const humanSpan = document.createElement("span");
  humanSpan.textContent = `Your Score: ${humanScore}`;

  const vsSpan = document.createElement("span");
  vsSpan.textContent = "vs.";
  vsSpan.classList.add("vs");

  const computerSpan = document.createElement("span");
  computerSpan.textContent = `Computer Score: ${computerScore}`;

  scoreboard.append(humanSpan, vsSpan, computerSpan);
  resultDiv.append(choiceLine, scoreboard);
});

// Paper Selection

btnForPaper.addEventListener("click", () => {
  const result = playRound("Paper");
  resultDiv.innerHTML = "";

  const choiceLine = document.createElement("p");
  choiceLine.textContent = result;

  const scoreboard = document.createElement("div");
  scoreboard.classList.add("scoreboard");

  const humanSpan = document.createElement("span");
  humanSpan.textContent = `Your Score: ${humanScore}`;

  const vsSpan = document.createElement("span");
  vsSpan.textContent = "vs.";
  vsSpan.classList.add("vs");

  const computerSpan = document.createElement("span");
  computerSpan.textContent = `Computer Score: ${computerScore}`;

  scoreboard.append(humanSpan, vsSpan, computerSpan);
  resultDiv.append(choiceLine, scoreboard);
});

// Scissor Selection

btnForScissor.addEventListener("click", () => {
  const result = playRound("Scissor");

  resultDiv.innerHTML = "";

  const choiceLine = document.createElement("p");
  choiceLine.textContent = result;

  const scoreboard = document.createElement("div");
  scoreboard.classList.add("scoreboard");

  const humanSpan = document.createElement("span");
  humanSpan.textContent = `Your Score: ${humanScore}`;

  const vsSpan = document.createElement("span");
  vsSpan.textContent = "vs.";
  vsSpan.classList.add("vs");

  const computerSpan = document.createElement("span");
  computerSpan.textContent = `Computer Score: ${computerScore}`;

  scoreboard.append(humanSpan, vsSpan, computerSpan);
  resultDiv.append(choiceLine, scoreboard);
});
