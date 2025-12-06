console.log("Welcome to Rock, Paper, Scissors Game!");
// Step 2: Get computer choice
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

// Step 3: Get human choice
function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:");
  return choice.toLowerCase(); // make it consistent
}

// Step 6: Play the entire game
function playGame() {
  // Step 4: Score variables
  let humanScore = 0;
  let computerScore = 0;

  // Step 5: Play a single round
  function playRound(humanChoice, computerChoice) {
    // normalize input
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}.`);
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Final Winner
  console.log("----- GAME OVER -----");
  if (humanScore > computerScore) {
    console.log(`You win the game! Score: ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(
      `You lost the game! Score: ${humanScore} - ${computerScore}`
    );
  } else {
    console.log(`It's a tie! Score: ${humanScore} - ${computerScore}`);
  }
}

playGame();