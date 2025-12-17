


    let humanScore = 0;
    let computerScore = 0;

    // DOM elements
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");

//    Get computer choice
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice) {
  if(humanScore === 5 || computerScore)return;

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultDiv.textContent =`It's a tie! You both chose ${humanChoice}.`;

  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreDiv.textContent = `Player : ${humanScore} | Computer : ${computerScore}`;
 

  if (humanScore === 5) {
    resultDiv.textContent = "Congratulations! You won the game!";
  } else if (computerScore === 5) {
    resultDiv.textContent = "Sorry! The computer won the game!";
 }
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));

document.getElementById("paper").addEventListener("click", () => playRound("paper"));

document.getElementById("scissors").addEventListener("click", () => ~playRound("scissors"));