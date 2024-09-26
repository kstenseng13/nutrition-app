// ColorButtons.js
import React from 'react';

const ColorButtons = ({ changeColorAndText }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <button className="btn-primary" onClick={() => changeColorAndText('red', 'POOR')}>Red</button>
            <button className="btn-primary" onClick={() => changeColorAndText('yellow', 'USE CAUTION')} style={{ marginLeft: '10px' }}>Yellow</button>
            <button className="btn-primary" onClick={() => changeColorAndText('green', 'GOOD')} style={{ marginLeft: '10px' }}>Green</button>
        </div>
    );
};

export default ColorButtons;
