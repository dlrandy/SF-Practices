import cartesianProduct from './cartesianProduct.js';

const cardRanks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3','2']; 
const cardSuits = ['♠', '♣', '♥', '♦'];

const cardDeck = cartesianProduct(cardRanks, cardSuits);

console.log(cardDeck);




