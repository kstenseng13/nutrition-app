'use client';

import { useSearchParams } from 'next/navigation'; // For retrieving query parameters
import { useEffect, useState } from 'react';
import FoodDetails from '../components/foodDetails';
import NutritionLabel from '../data/nutritionlabel';
import { useAuth } from '../context/userContext';

export default function FoodRatingPage() {
  const searchParams = useSearchParams();
  const [upc, setUpc] = useState(null);
  const [ratingColor, setRatingColor] = useState('');
  const [ratingText, setRatingText] = useState('');
  const [foodName, setFoodName] = useState();
  const { userData } = useAuth();

  //food nutrition details
  const [foodData, setFoodData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      const upcValue = searchParams.get('upc');
      setUpc(upcValue);

      //make api request to get food rating

      let url = '/api/getFoodData?upc=' + upcValue;
      let _returnedData = null;

      try {
        const response = await fetch(url);
        _returnedData = await response.json();
        console.log('_returnedData:', _returnedData);
      } catch (error) {
        console.error('Error:', error);
      }

      if (_returnedData === null) {
        console.error('Null: No data found for UPC:', upcValue);
      }
      else if (_returnedData.status === 'failure') {
        console.error('Fail: No data found for UPC:', upcValue);
      }
      else {
        console.log('Food Data:', _returnedData);
        //pull out the nutrition data from the response and set the state

        setFoodName(_returnedData.product.product_name);

        const nutritionData = {
          servingSize: _returnedData.product.serving_size,
          // servingsPerContainer: _returnedData.product.servings_per_container, // Uncomment if available
          calories: _returnedData.product.nutriments['energy-kcal_serving'],
          totalFat: _returnedData.product.nutriments['fat_serving'],
          saturatedFat: _returnedData.product.nutriments['saturated-fat_serving'],
          transFat: _returnedData.product.nutriments['trans-fat_serving'],
          cholesterol: _returnedData.product.nutriments['cholesterol_serving'] * 1000,
          sodium: _returnedData.product.nutriments['sodium_serving'] * 1000,
          totalCarbohydrate: _returnedData.product.nutriments['carbohydrates_serving'],
          dietaryFiber: _returnedData.product.nutriments['fiber_serving'],
          totalSugars: _returnedData.product.nutriments['sugars_serving'],
          addedSugars: _returnedData.product.nutriments['added-sugars_serving'],
          protein: _returnedData.product.nutriments['proteins_serving'],
          vitaminD: _returnedData.product.nutriments['vitamin-d_serving'] * 1000,
          calcium: _returnedData.product.nutriments['calcium_serving'] * 1000,
          iron: _returnedData.product.nutriments['iron_serving'] * 1000,
          potassium: _returnedData.product.nutriments['potassium_serving'] * 1000
        };

        console.log('Nutrition Data:', nutritionData);

        setFoodData(new NutritionLabel(nutritionData));

      }


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
    };

    fetchData();

  }, [searchParams]);

  return (
    <div className="py-8 text-center">
      <h1>Food Rating Results</h1>

      {/* Display UPC for debugging purposes */}
      <p>{upc} / {foodName} / Rates:</p>

      {/* Rating Box */}
      <div className="w-[300px] h-[200px] my-5 mx-auto flex justify-center items-center text-2xl text-black rounded-lg" style={{ backgroundColor: ratingColor }}>
        {ratingText}
      </div>
      {/* Nutrition Details */}
      <FoodDetails label={foodData} />
      <div className='pt-8'>
        <a href="/upcEntry" className='btn-primary'>Rate Another</a>
      </div>
    </div>
  );
}
