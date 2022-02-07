import React from 'react';
import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className

    // {props.children} because <Card> has > 1 components
    return <div className={classes}>{props.children}</div>;
};

export default Card;