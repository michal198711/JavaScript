
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
    name: "Michał",
    chips: 145,
    }
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")
let playerEl= document.getElementById("player-el")
playerEl.textContent=player.name+ ": " + player.chips + " pln";


//let i = 0
function getRandomCard() {
let randomNumber =  Math.floor(Math.random()*13)+ 1;
if(randomNumber >10) {
    return 10
}
else if (randomNumber === 1){
    return 11
}
else {
    return randomNumber
}

}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard=  getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Karty: "
  for (let i = 0; i<cards.length; i++){
      cardsEl.textContent +=cards[i]+ ", ";}
      sumEl.textContent="Sum " + sum
    if (sum <= 20) {
        message = "Chcesz kartę?"
    } else if (sum === 21) {
        message = "Masz oczko!!!"
        hasBlackJack = true
    } else {
        message = "Przegrałeś!"
        isAlive = false
      
    }
    messageEl.textContent = message
}
function newCard() {
    
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
