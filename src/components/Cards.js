import React from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

/**
 * Returns a given string with the first character uppercased.
 * @param {String} str the string to modify
 * @returns {String} modified string
 */
const toSentanceCase = (str) => {
    return `${str.split('')[0].toUpperCase()}${str.split('').slice(1).join('')}`;
}

const style = theme => ({
    root: theme.mixins.gutters({
        padding: '5px 15px',
        height: 45,
        width: 800,
        marginTop: 25,
        marginBottom: 25
    }),
    chip: theme.mixins.gutters({
        marginLeft: 2,
        marginRight: 2
    })
})

function Cards({ cards, classes }) {
    const organizedCards = [].concat(cards).reverse();
    return (
        <Grid container className={classes.root} direction="row" justify="flex-start" alignItems="flex-start">
            {organizedCards.map(card => 
                <Grid item key={card.type + card.suit}>
                    <Chip className={classes.chip} label={toSentanceCase(card.type)}/>
                </Grid>
            )}
        </Grid>
    );
}

export default withStyles(style)(Cards);