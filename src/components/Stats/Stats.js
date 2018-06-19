import React from "react";

const Stats = props => (
    <React.Fragment>
        <span>Current Score: {props.currentScore}&nbsp;&nbsp;</span>
        <span> Highest Score: {props.highestScore}&nbsp;&nbsp;</span>
        <span>{props.statusGuess}</span>
    </React.Fragment>
)

export default Stats;