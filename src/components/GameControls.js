import React from 'react';
import Switch from '@material-ui/core/Switch';
import { Button } from '@material-ui/core';

function GameControls({ is, actions }) {
    const { toggleCheat, takeTurn } = actions;
    return (
        <div>
            <Button variant="raised" color="primary" onClick={takeTurn.hit}>Hit</Button>
            <Button variant="flat" onClick={takeTurn.stand}>Stand</Button>
            <Switch checked={is.cheating} onChange={toggleCheat} /> Cheat
        </div>
    )
}

export default GameControls;