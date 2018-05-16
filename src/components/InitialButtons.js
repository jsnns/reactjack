import React from "react";
import AddIcon from '@material-ui/icons/Add';
import { Button } from "@material-ui/core";

const styles = {
  fab: {
    position: "absolute",
    bottom: 15 * 2,
    right: 15 * 2
  }
};

function InitialButtons({ startGame }) {
  return (
      <Button variant="fab" color="secondary" onClick={startGame} style={styles.fab}>
        <AddIcon />
      </Button>
  );
}

export default InitialButtons;
