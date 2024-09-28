
// Rectangle.js
import React from 'react';

const RatingComp = ({ color, text }) => {

    return (
        <div className="w-[300px] h-[100px] flex items-center justify-center border border-gray-300 rounded-lg mt-5" style={{ backgroundColor: color }}>
            <p>{text}</p>
        </div>
    );
};

export default RatingComp;