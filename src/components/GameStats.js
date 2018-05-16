import React from "react";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

import { HotValue, Attribute } from "./typography";

function GameStats({ cheat, game: { player, dealer, deck } }) {
  return (
    <Grid 
      container
      direction="row"
      justify="flex-start" 
      alignItems="flex-start"
    >
      <Attribute show={true} label={player.name} value={player.val} />
      <Attribute show={cheat} label="Dealer" value={dealer.val} />
      <Attribute show={cheat} label="Temprature" value={deck.checkTemp()} />
    </Grid>
  );
}

export default GameStats;
