import React from 'react';
import InitialButtons from "../components/InitialButtons";

function Init({ actions }) {
    return (
        <div>
            <InitialButtons 
                startGame={actions.startGame}
            />
        </div>
    );
}

export default Init;