/*  establish the rules RPS in array CHECK
    create function for random computer choice CHECK
    create prompt for player choice CHECK
    create function that plays one round of RPS CHECK
    create loop that plays RPS 5 times
    add win counters for both player and computer
    make win counters increase incrementally */

const rules = ["Rock" , "Paper" , "Scissors"];

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
        return "You lose! Paper beats Rock."
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        return "You win! Rock beats Paper."
    } else if (playerChoice === "Rock" && computerChoice === "Rock") {
        return "It's a tie!"
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return "You win! Paper beats Rock."
    } else if (playerChoice === "Paper" && computerChoice === "Paper") {
        return "It's a tie!"
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        return "You lose! Scissors beats Paper."
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        return "You lose! Rock beats Scissors."
    } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
        return "It's a tie!"
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        return "You win! Scissors beats Paper."
    } else {
        return "Somehow we managed to fuck up Rock, Paper, Scissors..."
    }
}   

console.log(playRPS(playerChoice(), computerChoice()));
console.log(playRPS(playerChoice(), computerChoice()));
console.log(playRPS(playerChoice(), computerChoice()));
console.log(playRPS(playerChoice(), computerChoice()));
console.log(playRPS(playerChoice(), computerChoice()));
console.log(playRPS(playerChoice(), computerChoice()));
console.log(playRPS(playerChoice(), computerChoice()));
