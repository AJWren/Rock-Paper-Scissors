
function playGame(){

    let humanScore = "0"
    let computerScore = "0"

    function getComputerChoice(){
        let randomNumber = Math.round(Math.random() * 100)
    if (randomNumber < 33){
        return "Rock"
    }
    if (randomNumber >= 33 && randomNumber < 66){
        return "Paper"
    }
    if (randomNumber >= 66){
        return "Scissors"
    }
    }
    
    
    function getHumanChoice(){
        let choice = prompt("Do you want to play a game? Please choose; Rock, Paper or Scissors")
        if (choice.toUpperCase() === "ROCK"){
            return ("Rock")
        }
        if (choice.toUpperCase() === "PAPER"){
            return ("Paper")
        } 
        if (choice.toUpperCase() === "SCISSORS"){
            return ("Scissors")
        } 
        else {
            return "an invalid move"
        }
    }
    
    
    function playRound(humanSelection, computerSelection){
        console.log("You picked " + humanSelection + ", the computer picked " + computerSelection + "!")
        if (humanSelection === computerSelection){
            console.log("Draw! you both picked the same!")
        }
        if (humanSelection === "an invalid move"){
            console.log("Player disqualified, the computer wins this round!")
            return computerScore++
        }
        if(humanSelection === "Rock" && computerSelection === "Scissors"){
            console.log("You win! Rock beats Scissors!")
            return humanScore++
        }
        if(humanSelection === "Paper" && computerSelection === "Rock"){
            console.log("You win! Paper beats Rock!")
            return humanScore++
        }
        if(humanSelection === "Scissors" && computerSelection === "Paper"){
            console.log("You win! Scissors beats Paper!")
            return humanScore++
        }
        if(humanSelection === "Rock" && computerSelection === "Paper"){
            console.log("You lose! Paper beats Rock!")
            return computerScore++
        }
        if(humanSelection === "Paper" && computerSelection === "Scissors"){
            console.log("You lose! Scissors beats Paper")
            return computerScore++
        }
        if(humanSelection === "Scissors" && computerSelection === "Rock"){
            console.log("You lose! Rock beats Scissors!")
            return computerScore++
        }
    }

    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
   

    playRound(humanChoice, computerChoice)
    console.log(humanScore + " " + computerScore)
    playRound(humanChoice, computerChoice)
    console.log(humanScore + " " + computerScore)
    playRound(humanChoice, computerChoice)
    console.log(humanScore + " " + computerScore)

}

playGame()




