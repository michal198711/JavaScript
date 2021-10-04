const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result
choices.forEach(choice => choice.addEventListener("click", (event)=>{
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    getComputerChoice()
    getresult()
}))

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 5) + 1
    if(randomNumber === 1){
        computerChoice = "rock"
    }
    if(randomNumber === 2){
        computerChoice = "scissors"
    }
    if(randomNumber === 3){
        computerChoice = "paper"
    }

if(randomNumber === 4){
    computerChoice = "lizard"
}

if(randomNumber === 5){
    computerChoice = "spock"
}
    computerChoiceDisplay.innerHTML = computerChoice
}

function getresult(){
    if(computerChoice === userChoice){
     result = `<span class= 'draw'> It's a draw.</span>`
    }
    if(computerChoice === 'rock' && userChoice === "paper"){
     result = "<span class='win'>You won, paper covers rock!"
    }
    if(computerChoice === 'rock' && userChoice === "scissors"){
     result = "<span class='lose'>You lost, rock crushes scissors!</span>"
    }
    if(computerChoice === 'rock' && userChoice === "lizard"){
        result = "<span class='lose'>You lost, rock crushes lizard!</span>"
       }
       if(computerChoice === 'rock' && userChoice === "spock"){
        result = "<span class='win'>You won, Spock vaporizes rock!</span>"
       }
    if(computerChoice === 'paper' && userChoice === "scissors"){
     result = "<span class='win'>You won!</span>"
    }
    if(computerChoice === 'paper' && userChoice === "rock"){
     result = "<span class='lose'>You lose!</span>"
    }
    if(computerChoice === 'paper' && userChoice === "lizard"){
        result = "<span class='win'>You won, lizard eats paper!</span>"
    }
    if(computerChoice === 'paper' && userChoice === "spock"){
    result = "<span class='lose'>You lose, paper disproves Spock!</span>"
    }
    if(computerChoice === 'scissors' && userChoice === "rock"){
     result = "<span class='win'>You win!</span>"
    }
    if(computerChoice === 'scissors' && userChoice === "paper"){
     result = "<span class='lose'>You lose!</span>"
    }
    if(computerChoice === 'scissors' && userChoice === "lizard"){
        result = "<span class='lose'>You lose, scissors decapitates lizard!</span>"
       }
       if(computerChoice === 'scissors' && userChoice === "spock"){
        result = "<span class='win'>You win, Spock smashes scissors!</span>"
       }
       if(computerChoice === 'spock' && userChoice === "lizard"){
        result = "<span class='lose'>You lose, lizard poisons Spock!</span>"
       }
    resultDisplay.innerHTML = result
}