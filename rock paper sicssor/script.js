// Function to save the selected mood and date
let playerScore = 0;
let computerScore = 0;
let turnCount = 1;
const maxTurns = 3;
let playerName = "Player";

// Function to start the game and get player's name
function startGame() {
    const nameInput = document.getElementById("playerName").value;
    playerName = nameInput ? nameInput : "Player"; // Set default name if input is empty
    document.getElementById("score").innerText = `Score: ${playerName} 0 - Computer 0`;
    document.querySelector(".choices").style.display = "block"; // Show the game choices
}

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play the game
function playGame(playerChoice) {
    if (turnCount > maxTurns) {
        document.getElementById("result").innerHTML = "Game over! Please refresh to play again.";
        return;
    }

    const computerChoice = getComputerChoice();
    const resultText = determineWinner(playerChoice, computerChoice);
    
    document.getElementById("result").innerHTML = `${playerName} chose <strong>${playerChoice}</strong>, Computer chose <strong>${computerChoice}</strong>. ${resultText}`;
    document.getElementById("score").innerText = `Score: ${playerName} ${playerScore} - Computer ${computerScore}`;
    document.getElementById("turns").innerText = `Turn: ${turnCount} / ${maxTurns}`;

    // Increment turn count
    turnCount++;

    // Check if the game is over
    if (turnCount > maxTurns) {
        declareFinalWinner();
    }
}

// Function to determine the winner and update score
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return `${playerName} wins this round!`;
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

// Function to declare the final winner after max turns
function declareFinalWinner() {
    let finalMessage = "";
    if (playerScore > computerScore) {
        finalMessage = `Congratulations, ${playerName}! You won the game!`;
    } else if (computerScore > playerScore) {
        finalMessage = `Sorry, ${playerName}! The computer won the game!`;
    } else {
        finalMessage = "It's a tie game!";
    }
    document.getElementById("result").innerHTML += `<br><strong>${finalMessage}</strong>`;
}
