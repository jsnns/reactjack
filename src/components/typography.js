import React from "react";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { Render } from './util';

function PageTitle({ children }) {
  return <Typography variant="display2">{children}</Typography>;
}

function GameMessage({ message }) {
  return (
    <Render show={message}>
      <Snackbar
        variant="headline"
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={true}
        message={message}
      />
    </Render>
  );
}

function Attribute({ label, value, show }) {
  return (
    <Grid item>
      <Render show={show}>
        <span style={{marginLeft: 20}}>{label}</span>
        <Chip style={{marginLeft: 7}} label={value} />
      </Render>
    </Grid>
  );
}

export { Attribute, GameMessage, PageTitle };
