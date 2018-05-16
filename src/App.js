import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// models
import Game from "./data/Game";

// scenes
import Init from "./scenes/Init";
import Play from "./scenes/Play";

// utils
import { bindTo, exists } from './util';

import { Render, Centered } from "./components/util";
import { PageTitle, GameMessage } from "./components/typography";
import DebugLog from './components/DebugLog';

const styles = {
  root: {
    padding: 25,
    width: "100%",
    marginTop: 75
  },
  fixed: {
    position: "absolute",
    top: 15 * 2,
    left: 15 * 2
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      game: null,
      cheat: false,
      log: false,
      debugs: [],
      debug: window.location.href.split('?')[1] === 'debug'
    };
  }

  startGame() {
    this.setState({
      game: new Game(),
      turns: []
    });
  }

  startRound() {
    this.state.game.newRound();
    this.setState({
      winner: null
    });
  }

  toggleCheat() {
    this.setState({ cheat: !this.state.cheat });
  }

  toggleLog() {
    const { log } = this.state;
    this.setState({ log: !log })
  }

  takeTurn(isStand) {
    const { game, debugs } = this.state;
    game.turn(isStand);
    this.setState({
      message: game.message().toUpperCase(),
      winner: game.winner
    });
    debugs.push({
      dealer: game.dealer.state || null,
      player: game.player.state || null,
      deck_util: `${Math.round(game.deck.utilization * 100)}%`,
      deck_cards: game.deck.cards.length || 0,
      state: game.state || null,
      winner: game.winner || null,
      expired: game.needsNewDeck || false
    });
  }

  render() {
    const { game, winner, message, cheat, debug, debugs, log } = this.state;
    const { takeTurn, startRound, startGame, toggleCheat, toggleLog } = this;

    // functional wrapping weirdness
    const binder = bindTo.bind(this);
    const strap = (f, o, a=[]) => binder(f, a, () => debugs.push({ state: o }));

    const is = {
      playing: exists(game),
      won: exists(game) && exists(winner),
      expired: exists(winner) && game.needsNewDeck,
      unexpired: exists(winner) && !game.needsNewDeck,
      uninited: !exists(game) || (!exists(winner) && game.needsNewDeck),
      cheating: cheat
    };

    const actions = {
      takeTurn: {
        hit: strap(takeTurn, 'take turn (hit)', [false]),
        stand: strap(takeTurn, 'take turn (stand)', [true])
      },
      toggleLog: binder(toggleLog),
      startRound: strap(startRound, 'start new round'),
      startGame: binder(startGame, 'start new game'),
      toggleCheat: binder(toggleCheat, 'toggle cheat mode')
    }

    return (
      <Centered style={styles.root}>
        <Grid item>
          <PageTitle>ReactJack</PageTitle>
        </Grid>
        <Grid item>
          <Render show={is.playing}>
            <GameMessage message={message} />
            <Play
              actions={actions}
              game={game}
              is={is}
            />
          </Render>
          <Render show={is.uninited}>
            <Init message={message} actions={actions} />
          </Render>
        </Grid>
        <Render show={debug}>
          <Button varient="flat" style={styles.fixed} onClick={actions.toggleLog}>Debugging Log</Button>
          <DebugLog debugs={debugs} is={is} message={message} open={log} close={actions.toggleLog} />
        </Render>
      </Centered>
    );
  }
}

export default App;
