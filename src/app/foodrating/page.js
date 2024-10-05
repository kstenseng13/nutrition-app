'use client';

import { useSearchParams } from 'next/navigation'; // For retrieving query parameters
import { useEffect, useState } from 'react';
import FoodDetails from '../components/foodDetails';

export default function FoodRatingPage() {
  const searchParams = useSearchParams();
  const [upc, setUpc] = useState(null);
  const [ratingColor, setRatingColor] = useState('');
  const [ratingText, setRatingText] = useState('');
  const [foodName, setFoodName] = useState();

  useEffect(() => {
    const upcValue = searchParams.get('upc');
    setUpc(upcValue);

    // Set box color and text based on UPC value
    if (upcValue === '1') {
      setRatingColor('green');
      setRatingText('GOOD');
      setFoodName('Salad');
    } else if (upcValue === '2') {
      setRatingColor('yellow');
      setRatingText('WARNING');
      setFoodName('Pasta');
    } else if (upcValue === '3') {
      setRatingColor('red');
      setRatingText('POOR');
      setFoodName('Candy');
    } else {
      setRatingColor('gray');
      setRatingText('Unknown Rating');
    }
  }, [searchParams]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Food Rating Results</h1>

      {/* Display UPC for debugging purposes */}
      <p>{upc} {foodName} Rates:</p>

      {/* Rating Box */}
      <div 
        style={{
          width: '300px',
          height: '200px',
          backgroundColor: ratingColor,
          margin: '20px auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          color: 'black',
          borderRadius: '8px',
        }}
      >
        {ratingText}
      </div>
      {/* Nutrition Details */}
      <FoodDetails label={{ getData: () => { 
        // Return dummy data for demonstration
        return {
          servingSize: '1 cup',
          servingsPerContainer: 2,
          calories: 150,
          totalFat: 5,
          saturatedFat: 1,
          transFat: 0,
          cholesterol: 0,
          sodium: 200,
          totalCarbohydrate: 25,
          dietaryFiber: 3,
          totalSugars: 5,
          addedSugars: 2,
          protein: 4,
          vitaminD: 0,
          calcium: 50,
          iron: 1,
          potassium: 200
        };
      }}} />
    </div>
  );
}
