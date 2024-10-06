// ColorButtons.js
import React from 'react';


const ColorButtons = ({ changeColorAndText }) => {
    return (
        <div className='mt-5'>
            <button className="btn-primary" onClick={() => changeColorAndText('red', 'POOR')}>Red</button>
            <button className="btn-primary ml-2" onClick={() => changeColorAndText('yellow', 'USE CAUTION')}>Yellow</button>
            <button className="btn-primary ms-2" onClick={() => changeColorAndText('green', 'GOOD')}>Green</button>
        </div>
    );
};

export default ColorButtons;
