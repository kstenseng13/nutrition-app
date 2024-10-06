
// Rectangle.js
import React from 'react';

const RatingComp = ({ color, text }) => {

    return (
        <div className="w-[300px] h-[200px] my-5 mx-auto flex justify-center items-center text-2xl text-black rounded-lg" style={{ backgroundColor: color }}>
            <p>{text}</p>
        </div>
    );
};

export default RatingComp;