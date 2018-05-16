export const HandStates = {
    BUST: 'BUST',
    EMPTY: 'EMPTY',
    STAND: 'STAND',
    PLAY: 'PLAY'
}

class Hand {
    constructor(name) {
        this.name = name || 'Player';
        this.val = 0;
        this.cards = [];
        this.state = HandStates.EMPTY;
    }

    stand() {
        this.state = HandStates.STAND;
    }

    hit(i) {
        this.state = HandStates.PLAY;
        this.cards.unshift(i);
        this.val += i.val;
        if (this.val >= 21)
            this.state = HandStates.BUST;
    }

    reset() {
        this.val = 0;
        this.state = HandStates.EMPTY;
    }
}

export default Hand;