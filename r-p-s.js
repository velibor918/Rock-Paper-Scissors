/*  establish the rules RPS in array CHECK
    create function for random computer choice CHECK
    create prompt for player choice CHECK
    create function that plays one round of RPS CHECK
    create loop that plays RPS 5 times CHECK 
    add win counters for both player and computer CHECK
    add win condition functions
    make win counters increase incrementally */

const rules = ["Rock", "Paper", "Scissors"];

let playerWinCount = 0;
let computerWinCount = 0;

function playerWin() {
    playerWinCount += 1;
    console.log(`You win! ${playerChoice} beats ${computerChoice}. You have ${playerWinCount} and I have ${computerWinCount}.`);
}

function computerWin() {
    computerWinCount +=1;
    console.log(`You lose! ${computerChoice} beats ${playerChoice}. You have ${playerWinCount} and I have ${computerWinCount}.`)
}

function computerChoice(arr) {
    return rules[Math.floor(Math.random() * rules.length)]
}

function playerChoice() {
    let pC = prompt("Let's play a game of Rock, Paper, Scissors!");
    let pCString = pC.toString();
    return pCString.charAt(0).toUpperCase() + pCString.slice(1).toLowerCase();
}

function playRPS(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        return "Loss"
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        return "Win"
    } else if (playerChoice === "Rock" && computerChoice === "Rock") {
        return "Tie"
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return "Win"
    } else if (playerChoice === "Paper" && computerChoice === "Paper") {
        return "Tie"
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        return "Loss"
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        return "Loss"
    } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
        return "Tie"
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        return "Win"
    } else {
        return "Somehow we managed to fuck up Rock, Paper, Scissors..."
    }
}

function playRPSFull() {
    console.log(playRPS(playerChoice(), computerChoice()));
    console.log(playRPS(playerChoice(), computerChoice()));
    console.log(playRPS(playerChoice(), computerChoice()));
    console.log(playRPS(playerChoice(), computerChoice()));
    console.log(playRPS(playerChoice(), computerChoice()));
}

playRPSFull();