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

console.log(getComputerChoice())
