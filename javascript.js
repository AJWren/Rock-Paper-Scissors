//Create variables
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const preAmble = document.querySelector("#preAmble")
const results = document.querySelector("#results")
const score = document.querySelector("#score")
const round = document.querySelector("#round")
const newButton = document.createElement("button")

//Create score variable
let humanScore = "0"
let computerScore = "0"
let roundNumber = "1"

//Rock, Paper, Scissors button functions to trigger a game round
function selectRock(){
    let humanChoice = "Rock"
    playRound(humanChoice, getComputerChoice());    
}
function selectPaper(){
    let humanChoice = "Paper"
    playRound(humanChoice, getComputerChoice())
}
function selectScissors(){
    let humanChoice = "Scissors"
    playRound(humanChoice, getComputerChoice())
}

//Refresh page function for play again button
function refresh(){
    location.reload();
}

//Onclick actions for buttons
rockButton.onclick = selectRock
paperButton.onclick = selectPaper
scissorsButton.onclick = selectScissors

//Create computer choice function by using random number generated between 0 - 100
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

//The play round function which compares human and computer choices - score variables increment depending on who wins
function playRound(humanSelection, computerSelection){
    if(roundNumber <= 5){
        preAmble.textContent = "You picked " + humanSelection + ", the computer picked " + computerSelection + "!"
        if (humanSelection === computerSelection){
            results.textContent = "Draw! you both picked the same!"
            score.textContent = humanScore + " " + computerScore
            ++roundNumber
            round.textContent = "Round: " + roundNumber
        }
        if (humanSelection === "an invalid move"){
            results.textContent = "Player disqualified, the computer wins this round!"
            computerScore++
            ++roundNumber
            score.textContent = humanScore + " " + computerScore
            round.textContent = "Round: " + roundNumber
        }
        if ((humanSelection === "Rock" && computerSelection === "Scissors") ||
            (humanSelection === "Paper" && computerSelection === "Rock") ||
            (humanSelection === "Scissors" && computerSelection === "Paper")){
                results.textContent = "You win! " + humanSelection + " beats " + computerSelection + " !"
                humanScore++
                ++roundNumber
                score.textContent = humanScore + " " + computerScore
                round.textContent = "Round: " + roundNumber
        }
        if((humanSelection === "Rock" && computerSelection === "Paper") ||
            (humanSelection === "Paper" && computerSelection === "Scissors") ||
            (humanSelection === "Scissors" && computerSelection === "Rock")){
                results.textContent = "You lose! " + computerSelection + " beats " + humanSelection + " !"
                computerScore++
                ++roundNumber
                score.textContent = humanScore + " " + computerScore
                round.textContent = "Round: " + roundNumber
        }

    } if (roundNumber == 6){
        round.textContent = "GAME OVER "
        playAgain()
        preAmble.textContent = "You picked " + humanSelection + ", the computer picked " + computerSelection + "!"
        results.textContent = getResult()
        score.textContent = ""
    }
}

//Evaluates player score against computer score and returns final result
function getResult(){
    if (humanScore === computerScore){
        return "It's a draw " + humanScore + " - " + computerScore + "!"
    }
    if (humanScore > computerScore){
        return "Congratulations, you win " + humanScore + " - " + computerScore + "!"
    }
    if (humanScore < computerScore){
        return "Unlucky, the computer wins " + computerScore + " - " + humanScore + "!"
    }
}

//End game UI - removes play functionality and creates play again option
function playAgain(){
    rockButton.remove()
    paperButton.remove()
    scissorsButton.remove()
    newButton.textContent = "Play again?"
    round.appendChild(newButton)
    newButton.onclick = refresh
}

//Created human choice function using prompt box and transorm to upper case

/*function getHumanChoice(){
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
}*/

//The play game function calls on the choice functions, and round function, looping them 5 times before declaring a winner based on the score variables.
/*function playGame(){
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log("Score: " + humanScore + " - " + computerScore)
    }
    if (humanScore === computerScore){
        console.log("It's a draw " + humanScore + " - " + computerScore + "! Refresh the page to play again.")
    }
    if (humanScore > computerScore){
        console.log("Congratulations, you win " + humanScore + " - " + computerScore + "! Refresh the page to play again.")
    }
    if (humanScore < computerScore){
        console.log("Unlucky, the computer wins " + computerScore + " - " + humanScore + "! Refresh the page to play again.")
    }
}

playGame()*/





