import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";

const styles = {
  modal: { 
    top: "50%", 
    left: "50%", 
    transform: `translate(-50%, -50%)`,
    fontFamily: 'monospace'
  },
  paper: { padding: 25 },
  turn: {
    marginBottom: 7
  }
};

function Turn({ debug }) {
  const blacklist = ["ONGOING"];
  const keys = Object.keys(debug);
  const msg = keys.reduce((prev, current) => {
    const value = debug[current];
    if (blacklist.includes(value)) return prev;
    
    prev[current] = `${current}: ${value}`;
    return prev;
  }, {});

  if (debug.winner) {
    return (
      <div>
        {msg.dealer}, {msg.player}, {msg.winner}, {msg.deck_cards},{" "}
        {msg.expired}<br/>
      </div>
    );
  }
  return (
    <div style={styles.turn}>
      {msg.state}
      {msg.deck_util} <br/>
    </div>
  );
}
class DebugLog extends Component {
  render() {
    const { open, is, debugs, message, close } = this.props;
    return (
      <Modal style={styles.modal} open={open} onClose={close}>
        <Paper style={styles.paper} elevation={2}>
          {debugs.map(debug => <Turn debug={debug} />)}
        </Paper>
      </Modal>
    );
  }
}

export default DebugLog;
