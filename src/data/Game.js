import Deck from './Deck';
import Hand, { HandStates } from './Hand';

const GameStates = {
    ONGOING: 'ONGOING',
    PLAYER_STAND: 'PLAYER_STAND',
    PLAYER_BUST: 'PLAYER_BUST',
    DEALER_BUST: 'DEALER_BUST'
}

const Winners = {
    PLAYER: 'Player',
    DEALER: 'Dealer'
}

class Game {
    constructor() {
        this.deck = new Deck();
        this.newRound(); // Start new round
    }

    newRound() {
        this.player = new Hand();
        this.dealer = new Hand();
        this.state = GameStates.ONGOING;
        this.winner = null;
        this.needsNewDeck = false;
    }

    message() {
        const { winner, deck } = this;

        if (winner) return `${winner} wins!`;
        else return `Playing with ${Math.round(deck.utilization * 100)}% utilization`;
    }

    hit(hand) {
        const deck = this.deck;
        const card = deck.draw();
        hand.hit(card);

        if (this.deck.expired()) this.needsNewDeck = true;
    }

    play(hand, dealer) {
        if (hand.state === HandStates.STAND) return;
        if (hand.state === HandStates.BUST) return;

        // Player turn logic
        switch(hand.state) {
            case HandStates.EMPTY:
            case HandStates.PLAY:
                if ((dealer && this.dealer.val < 17) || !dealer)
                    this.hit(hand);
                else if (dealer)
                    this.dealer.stand();
                break;
            default:
                break;
        }
    }

    turn(stand) {
        const { winner, dealer, player } = this;

        // easy Enum values
        const { PLAYER, DEALER } = Winners;
        const { DEALER_BUST, PLAYER_BUST, PLAYER_STAND, ONGOING } = GameStates;
        const { BUST, STAND, PLAY } = HandStates;

        if (stand) this.player.stand();
        
        this.play(player);
        this.play(dealer, true);

        while (dealer.state === PLAY && player.state === STAND) {
            this.turn(true);
        }

        if (dealer.state === BUST) {
            this.winner = PLAYER;
            this.state = DEALER_BUST
        } 
        if (player.state === BUST) {
            this.winner = DEALER;
            this.state = PLAYER_BUST;
        }
        if (player.state === STAND && dealer.state === STAND) {
            const playerWins = player.val > dealer.val;
            this.winner = playerWins ? PLAYER : DEALER;
        }
        
        return this; // return full game state
    }
}

export default Game;