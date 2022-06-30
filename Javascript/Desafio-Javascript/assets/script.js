const cards = document.querySelectorAll('.card');
let hasFlipCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!hasFlipCard) {
        hasFlipCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlipCard = false;
    checkForMat();
}

function checkForMat() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() { //Retorna carta para o sentido padrão
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlipCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

}

(function shuFfle() { // Imediatle function - é invocada toda vez que a pagina for fechada e reaberta.
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.style.order = ramdomPosition;
    })
})();


cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})




