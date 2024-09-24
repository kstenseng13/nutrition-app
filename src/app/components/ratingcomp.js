"use client"; // Mark as a Client Component

import React, { useState } from 'react';

const RatingComp = () => {
    const [color, setColor] = useState('#f0f0f0');
    const [text, setText] = useState('Default Text');

    const changeColorAndText = (newColor, newText) => {
        setColor(newColor);
        setText(newText);
    };

    return (
        <div>
            <div style={{ backgroundColor: color, width: '300px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
                <p>{text}</p>
            </div>
            <div style={{ marginTop: '20px' }}>
                <button className="btn-warning" onClick={() => changeColorAndText('red', 'Red')}>Red</button>
                <button className="btn-primary" onClick={() => changeColorAndText('yellow', 'Yellow')} style={{ marginLeft: '10px' }}>Yellow</button>
                <button className="btn-primary" onClick={() => changeColorAndText('green', 'Green')} style={{ marginLeft: '10px' }}>Green</button>
            </div>
        </div>
    );
};

export default RatingComp;
