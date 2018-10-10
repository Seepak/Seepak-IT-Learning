/**
 * Feecode Camp Tutorial memory Game
 */
console.log('coucou toi')

const cards = document.querySelectorAll('.mg__card')

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    if(firstCard === this) return;

    this.classList.add('flip')   

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return; 
    }

    hasFlippedCard = false;
    secondCard = this;  

    let isMatch = firstCard.dataset.img === secondCard.dataset.img
    isMatch? disableEventListenerCards() : unFlippedCards();
}

function disableEventListenerCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    resetBoard();
}

function unFlippedCards() {
    loackBoard = true;
    setTimeout(function(){
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        loackBoard = false;
        resetBoard();
    }, 700)
}

function resetBoard() {
    hasFlippedCard, lockBoard= false
    firstCard, secondCard = false
}

(function shuffle() {
    cards.forEach(card => {
        let numberPos = Math.floor(Math.random() * 12)
        card.style.order = numberPos
    })  
})();

cards.forEach(card => card.addEventListener('click', flipCard))
