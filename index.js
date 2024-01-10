let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


let messageEl = document.getElementById("message-el")

//Read content of #sum-el #cards-el
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")

// Return random card value between 1-13
function getRandomCard() {
    return Math.floor(Math.random()*13) + 1
}

function startGame() {
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


// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    console.log("Drawing out a new card")

    // 1. Create a card variable, and hard code its value to a number (2-11)
    let thirdCard = getRandomCard()
    
    // 2. Add the new card to the sum variable
    cards.push(thirdCard)
    sum += thirdCard
    
    // 3. Call startGame()
    renderGame();
}