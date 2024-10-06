"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { useUser } from '../context/userContext';  // Import user context

export default function FoodCheckPage() {
  const [upc, setUpc] = useState(''); 
  const [error, setError] = useState(null);  
  const [selectedOption, setSelectedOption] = useState(''); 
  const { userData, isLoggedIn, login } = useUser();  // Access user context
  const router = useRouter(); 

  // Set initial dietary selection from userData if logged in
  useEffect(() => {    
    if (isLoggedIn) {
      // Determine which option to select based on userData's Boolean values
      if (userData.lowFat) {
        setSelectedOption('Low Fat');
      } else if (userData.lowSodium) {
        setSelectedOption('Low Sodium');
      } else {
        setSelectedOption(''); // No selection if both are false
      }
    } else {
      setSelectedOption(''); // Show default "Select a diet" if not logged in or no selection exists
    }
  }, [isLoggedIn, userData]);

  // Handle UPC input change
  const handleChange = (event) => {
    const value = event.target.value;
    if (/^[0-9]{0,13}$/.test(value)) {
      setUpc(value);
      setError(''); 
    } else {
      setError('UPC code must only contain up to 13 digits. No other characters are allowed.');
    }
  };

  // Handle dropdown change
  const handleDropdownChange = (event) => {
    const newSelection = event.target.value;
    setSelectedOption(newSelection);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (upc) {
      setError(null);  
      router.push(`/foodrating?upc=${upc}`);  // Route to the food rating page
    }
  };

  return (
    //Pixabay. (2022, March 9). Running, Woman, Track image. Free for use. [Photograph]. rojesh55. https://pixabay.com/photos/running-woman-track-exercise-7056590/
    <div className="min-h-screen bg-cover bg-[radial-gradient(circle,rgba(31,41,55,0.9),rgba(31,41,55,0.4)),url('https://cdn.pixabay.com/photo/2022/03/08/21/20/running-7056590_1280.jpg')] flex flex-col">
      <div className='flex-grow flex items-center justify-center py-16'>
        <div className='bg-beige w-full mx-4 md:w-1/3 p-8 rounded-lg shadow-lg flex flex-col items-center'>
          <h1 className="text-center text-4xl mb-5">UPC Food Check</h1>
          {/* UPC Code Entry Form */}
          <div className="text-center w-full">
            <p className="text-lg mb-2 mt-5 text-left">Enter UPC Code</p>
            {/* Form containing both the input and button */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={upc}
                onChange={handleChange}
                placeholder="Enter UPC code"
                maxLength="13"
                className="p-2 w-full mb-2"
              />
              <div className="w-full text-left text-red-500">
                {error && <p className="m-0 break-words">{error}</p>}
              </div>
              {/* Dietary selection dropdown */}
              <p className="text-lg mb-2 mt-5 text-left">Select Your Diet</p>
              <select
                value={selectedOption}
                onChange={handleDropdownChange}
                className="p-2 w-full mb-5"
              >
                <option value="" disabled>Select a diet</option>
                <option value="Low Fat">Low Fat</option>
                <option value="Low Sodium">Low Sodium</option>
              </select>
              {/* Submit button to check the food (must be inside the form) */}
              <button type="submit" className="btn-primary">
                Check the Food!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
