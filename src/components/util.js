import React from 'react';
import Grid from '@material-ui/core/Grid';

/**
 * Conditional render of a child component
 * @prop {React.Component} children component to render
 * @prop {boolean} show will not render if false
 */
function Render({ show, children }) {
    return <div>
        {show && children}
    </div>
}

function Centered({ children, style }) {
    return (
        <Grid
            container
            alignItems="center"
            direction="column"
            justify="flex-start"
            style={style}
        >
            {children}
        </Grid>
    );
}

export {
    Render,
    Centered
}