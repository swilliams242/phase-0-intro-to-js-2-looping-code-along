const cards = ["Guadalupe", "Olli", "Aki"];

function writeCards(cards) {
    const newCards = [];
    for (let i = 0; i < cards.length; i++) {
        newCards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }

    return newCards;
}

writeCards(cards);


function countDown(numbers) {
    let countDown = 10
    while (countDown >= 0) {
        console.log(countDown--);
    }
}