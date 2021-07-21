import React, { useState } from 'react';
import './App.css';

const Tweet = ({ name, msg }) => {
    const [count, setCount] = useState(0);
    const [isRed, setRed] = useState(false);

    const increment = () => {
        setCount(count + 1);
    };

    const color = () => {
        setRed(!isRed);
    };
    return (
        <div className="tweet">
            <h3>From : {name}</h3>
            <p className={isRed ? 'red' : ''}>{msg}</p>
            <h3>Likes : {count}</h3>
            <button className="btn" onClick={increment} onMouseOver={color}>
                LIKE
            </button>
        </div>
    );
};

export default Tweet;
