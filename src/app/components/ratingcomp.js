
// Rectangle.js
import React from 'react';

const RatingComp = ({ color, text }) => {

    return (
        <div style={{ backgroundColor: color, width: '300px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
            <p>{text}</p>
        </div>
    );
};

export default RatingComp;