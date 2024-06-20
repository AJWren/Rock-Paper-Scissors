console.log("Rock, Paper, Scissors")

function getComputerChoice(){
    let computerChoice = Math.round(Math.random() * 100)
if (computerChoice < 33){
    return "Rock"
}
if (computerChoice >= 33 && computerChoice < 66){
    return "Paper"
}
if (computerChoice >= 66){
    return "Scissors"
}
}

function getHumanChoice(){
    let humanChoice = prompt("Do you want to play a game? Please choose; Rock, Paper or Scissors")
    if (humanChoice.toUpperCase() === "ROCK"){
        return ("Rock")
    }
    if (humanChoice.toUpperCase() === "PAPER"){
        return ("Paper")
    } 
    if (humanChoice.toUpperCase() === "SCISSORS"){
        return ("Scissors")
    } 
    else {
        return "Please enter a valid move"
    }
}


console.log(getHumanChoice())

console.log(getComputerChoice())
