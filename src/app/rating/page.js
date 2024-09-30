"use client"; 

import React, { useState } from 'react';
import ColorButtons from '../test/colorbuttons';
import RatingComp from '../components/ratingcomp';

export default function Rating() {

    const [color, setColor] = useState('#f0f0f0');
    const [text, setText] = useState('Default Text');

    const changeColorAndText = (newColor, newText) => {
        setColor(newColor);
        setText(newText);
    };


    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 ">

            <h2>This is the Food Rating page.</h2>
            <RatingComp color={color} text={text} />


            <br /><br /><br />
            <h3>Click on the buttons below to test change the color and text of the rectangle above.</h3>
            <ColorButtons changeColorAndText={changeColorAndText} />  

        </div>
    );
}