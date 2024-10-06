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
    <div className="py-8 text-center">
      <h1>Food Rating Results</h1>

      {/* Display UPC for debugging purposes */}
      <p>{upc} {foodName} Rates:</p>

      {/* Rating Box */}
      <div className="w-[300px] h-[200px] my-5 mx-auto flex justify-center items-center text-2xl text-black rounded-lg" style={{ backgroundColor: ratingColor }}>
        {ratingText}
      </div>
      {/* Nutrition Details */}
      <FoodDetails label={{
        getData: () => {
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
        }
      }} />
      <div className='pt-8'>
        <a href="/upcEntry" className='btn-primary'>Rate Another</a>
      </div>
    </div>
  );
}
