/**
 * Feecode Camp Tutorial memory Game
 */
console.log('coucou toi')

const cards = document.querySelectorAll('.mg')

function flipCard() {
    this.classList.toggle('flip')
}

cards.forEach(card => card.addEventListener('click', flipCard))