/*  establish the rules RPS in array CHECK
    create function for random computer choice CHECK
    create prompt for player choice CHECK
    create function that plays one round of RPS CHECK
    create loop that plays RPS 5 times CHECK 
    add win counters for both player and computer CHECK
    add win condition functions CHECK
    make win counters increase incrementally CHECK
    incorporate win condition functions in RPS Full Game loop function CHECK
    add function that checks final result and declares a winner */

const rules = ["Rock", "Paper", "Scissors"];

let playerWinCount = 0;
let computerWinCount = 0;



function playerWin(playerChoice, computerChoice) {
    playerWinCount += 1;
    return console.log(`You win! ${playerChoice} beats ${computerChoice}. You have ${playerWinCount} and I have ${computerWinCount}.`);
}

function computerWin(playerChoice, computerChoice) {
    computerWinCount +=1;
    console.log(`You lose! ${computerChoice} beats ${playerChoice}. You have ${playerWinCount} and I have ${computerWinCount}.`)
}

function computerChoice(arr) {
    return rules[Math.floor(Math.random() * rules.length)]
}

function playerChoice() {
    let pC = prompt("Let's play a game of Rock, Paper, Scissors! Best of five wins");
    let pCString = pC.toString();
    return pCString.charAt(0).toUpperCase() + pCString.slice(1).toLowerCase();
}

function scoreCheck(playerWinCount, computerWinCount){
    if (playerWinCount > computerWinCount) {
        console.log("The final result is...\n You win!")
    } else if (computerWinCount > playerWinCount) {
        console.log("The final result is...\n You lose!")
    } else {
        console.log("The final result is...\n It's a tie!")
    }
}

function playRPS(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        computerWin(playerChoice, computerChoice)
        return "Loss"
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        playerWin(playerChoice, computerChoice)
        return "Win"
    } else if (playerChoice === "Rock" && computerChoice === "Rock") {
        console.log("It's a tie!")
        return "Tie"
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        playerWin(playerChoice, computerChoice)
        return "Win"
    } else if (playerChoice === "Paper" && computerChoice === "Paper") {
        console.log("It's a tie!")
        return "Tie"
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        computerWin(playerChoice, computerChoice)
        return "Loss"
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        computerWin(playerChoice, computerChoice)
        return "Loss"
    } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("It's a tie!")
        return "Tie"
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        playerWin(playerChoice, computerChoice)
        return "Win"
    } else {
        return "Somehow we managed to fuck up Rock, Paper, Scissors..."
    }
}

function playRPSFull() {
playRPS(playerChoice(), computerChoice());
playRPS(playerChoice(), computerChoice());
playRPS(playerChoice(), computerChoice());
playRPS(playerChoice(), computerChoice());
playRPS(playerChoice(), computerChoice());
}

playRPSFull();

scoreCheck(playerWinCount, computerWinCount);
