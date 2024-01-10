
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

//initiate object
let player = {
    name: "Player",
    chips: 120
}

let playerEl = document.getElementById("player-el")

//call object
playerEl.textContent = player.name + ": $" + player.chips



let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")

// Return random card value between 1-13
function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13) + 1

    // if 1     -> return 11
    // if 11-13 -> return 10
        if (randomCard === 1) {
            return 11 
        } else if (randomCard > 10) {
            return 10
        } else {
            return randomCard
        }
    
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    //Display calculated sum in #sum-el #cards-el
    cardsEl.textContent = "Cards: "

    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}



function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        // 1. Create a card variable, and hard code its value to a number (2-11)
        let thirdCard = getRandomCard()
        
        // 2. Add the new card to the sum variable
        cards.push(thirdCard)
        sum += thirdCard
        
        
        // 3. Call startGame()
        renderGame();
    }

}