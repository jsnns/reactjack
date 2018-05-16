import Card from './Card';
import config from '../config/deck.config';

class Deck {
    constructor() {
        this.maxUtilization = 0.6;
        this.utilization = 0.0;
        this.cards = this.getNewDeck();
        this.initialSize = this.cards.length;
        this.usedCards = [];
        this.randomize();
    }

    expired() {
        return (this.utilization >= this.maxUtilization);
    }

    checkTemp() {
        // sum all cards deck temp
        return this.usedCards.reduce((prev, curr) => (
            prev+curr.tempVal
        ), 0);
    }
    
    draw() {
        // technically FIFO :)
        const card = this.cards.shift();

        this.usedCards.push(card);
        this.utilization += 1/this.initialSize;

        return card;
    }

    /**
     * Creates a new deck for use in game.
     * @returns {Array<Card>} a map of all cardTypes and all suits.
     * 
     * Runs in exponential time O(n^2) this is fine 
     * because n will remain low even with a few decks. 
     * Typical use cases will not need more than 3-4 decks
     * n = 208
     */
    getNewDeck() {
        const { types, suits } = config;
        const cardTypes = Object.keys(types);
        const allDeckCards = cardTypes.map(type =>
            suits.map(suit =>
                new Card({ 
                    suit, 
                    type, 
                    val: config.types[type] 
                })
            )
        );

        // flatten 2d array of cards. could validate that all cards exist here.
        return [].concat(...allDeckCards);
    }

    /**
     * Randomize self's deck property.
     * @returns {Array<Card>}
     * Constant time O(n)
     * Using Durstenfeld shuffle algorithm.
     */
    randomize() {
        const array = this.cards;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}

export default Deck;