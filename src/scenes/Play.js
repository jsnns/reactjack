import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

import GameControls from "../components/GameControls";
import Cards from "../components/Cards";
import GameStats from "../components/GameStats";
import { Render, Centered } from "../components/util";

const styles = {
  typeWrapper: {
    marginBottom: 25
  },
  root: {
    marginTop: 25
  }
};

function Game({ game, is, actions }) {
  const hand = game.player.cards;

  return (
    <Grid item style={styles.root}>
      <Grid item xs={12}>
        <GameStats game={game} cheat={is.cheating} />
        <Paper>
          <Cards cards={hand} />
        </Paper>
      </Grid>
      <Centered>
        <Render show={!is.won}>
          <GameControls is={is} actions={actions} />
        </Render>
        <Grid item xs={12}>
          <Render show={is.unexpired}>
            <Button
              onClick={actions.startRound}
              variant="raised"
              color="primary"
            >
              Deal Hands
            </Button>
          </Render>
        </Grid>
      </Centered>
    </Grid>
  );
}

export default Game;
