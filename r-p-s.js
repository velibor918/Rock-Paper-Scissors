/*  establish the rules RPS in array CHECK
    create function for random computer choice
    create prompt for player choice
    create function that plays one round of RPS
    create loop that plays RPS 5 times
    add win counters for both player and computer
    make win counters increase incrementally */

const rules = ["Rock" , "Paper" , "Scissors"];

function computerChoice(arr) {
    return rules[Math.floor(Math.random() * rules.length)]
}

console.log(computerChoice(rules))
console.log(computerChoice())
console.log(computerChoice(rules))
console.log(computerChoice())