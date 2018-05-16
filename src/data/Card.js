class Card {
    /**
     * Instantiates a new Card instance
     * 
     * @param {string} suit the suit class of the card
     * @param {int} val the blackjack numeric value of the card
     * @param {string} type the type of card
     * 
     * @example
     *      new Card({
     *          suit: 'spade',
     *          type: 'king',
     *          val: 10
     *      })
     */
    constructor({ suit, val, type }) {
        this.suit = suit;
        this.val = val;
        this.type = type;
        this.tempVal = this.getCountingValue();
    }

    /**
     * @returns {int} the value of this card based on the Hi-Lo card counting schema
     */
    getCountingValue() {
        if (this.val >= 2 && this.val <= 6) return 1;
        else if (this.val === 10) return -1;
        else return 0;
    }
}

export default Card;