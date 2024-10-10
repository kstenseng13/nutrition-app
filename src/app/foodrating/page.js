'use client';

import { useSearchParams } from 'next/navigation'; // For retrieving query parameters
import { useEffect, useState } from 'react';
import FoodDetails from '../components/foodDetails';
import RatingComp from '../components/ratingcomp';
import NutritionLabel from '../data/nutritionlabel';
import { useAuth } from '../context/userContext';
import useSanitizedInput from '../hooks/useSanitizedInput';
import useFoodRating from '../hooks/useFoodRating';

export default function FoodRatingPage() {
  const searchParams = useSearchParams();
  const [upc, setUpc] = useState(null);
  const [diet, setDiet] = useState(null);
  const [ratingColor, setRatingColor] = useState('');
  const [ratingText, setRatingText] = useState('');
  const [foodName, setFoodName] = useState();
  const { userData } = useAuth();
  const { sanitizeInput } = useSanitizedInput();
  const { calculateRating } = useFoodRating();

  //food nutrition details
  const [foodData, setFoodData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const upcValue = searchParams.get('upc');
      const sanitizedUpc = sanitizeInput(upcValue);
      setUpc(sanitizedUpc);

      //dietValue should be "Low Fat" or "Low Sodium" coming from the upcEntry page
      //pass this into the rating calculation alrogithm
      const dietValue = searchParams.get('diet');
      setDiet(dietValue);

      if (!sanitizedUpc || !dietValue) return; // Return early if necessary values are not present

      //make api request to get food rating

      let url = '/api/getFoodData?upc=' + upcValue;
      let _returnedData = null;

      try {
        const response = await fetch(url);
        _returnedData = await response.json();
      } catch (error) {
        console.error('Error:', error);
      }

      if (_returnedData === null) {
        console.error('Null: No data found for UPC:', upcValue);
        setFoodName("Food Not Found");
      }
      else if (_returnedData.status === 'failure') {
        console.error('Fail: No data found for UPC:', upcValue);
        setFoodName("Food Not Found");
      }
      else {
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
        const { color, text } = calculateRating(dietValue, nutritionData.sodium, nutritionData.totalFat);
        setRatingColor(color);
        setRatingText(text);
      }
    };

    fetchData();

  }, [searchParams]);

  return (
    <div className="py-8 text-center">
      <h1>Food Rating Results</h1>

      {/* Rating Box */}
      <RatingComp color= {ratingColor} text={ratingText} />

      <h4>Rating for Diet: {diet}</h4>
      <h4>{foodName}</h4>
      <h4 className='pb-4'>UPC: {upc}</h4>

      {/* Nutrition Details */}
      <FoodDetails label={foodData} />

      <div className='pt-8'>
        <a href="/upcEntry" className='btn-primary'>Rate Another</a>
      </div>
    </div>
  );
}
