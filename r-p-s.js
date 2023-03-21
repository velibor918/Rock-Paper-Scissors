/*  establish the rules RPS in array CHECK
    create function for random computer choice CHECK
    create prompt for player choice CHECK
    create function that plays one round of RPS
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

playerChoice();
