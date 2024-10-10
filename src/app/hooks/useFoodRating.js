import { useState } from 'react';

const useFoodRating = () => {
    const calculateRating = (diet, sodium, fat) => {
        if (diet === 'Low Sodium') {
            if (sodium > 400) return { color: 'red', text: 'POOR' };
            if (sodium >= 200) return { color: 'yellow', text: 'WARNING' };
            return { color: 'green', text: 'GOOD' };
        } else if (diet === 'Low Fat') {
            if (fat > 5) return { color: 'red', text: 'POOR' };
            if (fat >= 3) return { color: 'yellow', text: 'WARNING' };
            return { color: 'green', text: 'GOOD' };
        }

        // If no matching condition, return a default value
        return { color: 'gray', text: 'Unknown Rating' };
    };

    return { calculateRating };
};

export default useFoodRating;