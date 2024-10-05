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
    
    console.log('Submitting form...'); // Debug log

    if (upc) {
      setError(null);  

      console.log('isLoggedIn:', isLoggedIn);
      console.log('userData:', userData);
      console.log('selectedOption:', selectedOption);


      // If user is logged in, update the corresponding dietary preference
      if (isLoggedIn) {
        const updatedUser = {
          username: userData.username,  // Ensure you're getting the username from userData
          lowFat: selectedOption === 'Low Fat',
          lowSodium: selectedOption === 'Low Sodium',
        };
        console.log('Updated user data:', updatedUser); // Debug log

        // Update the user context with the new dietary selection
        login(updatedUser);  // This updates the context and sessionStorage

        try {
          // Make the PUT request to update dietary preferences in the database
          const response = await fetch('/api/putUpdateUser', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
          });
  
          if (!response.ok) {
            throw new Error('Failed to update dietary preferences');
          }
  
          const data = await response.json();
          console.log(data.message); // Log success message or handle it as needed
        } catch (error) {
          console.error(error.message);
          setError('Error updating dietary preferences: ' + error.message);
        }
      }
      router.push(`/foodrating?upc=${upc}`);  // Route to the food rating page
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '20px' }}>UPC Food Check</h1>

      <div style={{ position: 'relative', textAlign: 'center', width: '300px' }}> 
        <p style={{ fontSize: '18px', marginBottom: '10px', marginTop: '20px', textAlign: 'left', width: '300px' }}>Enter UPC Code</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={upc}
            onChange={handleChange}
            placeholder="Enter UPC code"
            maxLength="13"
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <div style={{ width: '100%', textAlign: 'left', color: 'red' }}>
            {error && <p style={{ margin: 0, wordWrap: 'break-word' }}>{error}</p>}
          </div>

          <p style={{ fontSize: '18px', marginBottom: '10px', marginTop: '20px', textAlign: 'left', width: '300px' }}>Select Your Diet</p>
          <select
            value={selectedOption}
            onChange={handleDropdownChange}
            style={{ padding: '10px', width: '300px', marginBottom: '20px' }}>
            <option value="" disabled>Select a diet</option>
            <option value="Low Fat">Low Fat</option>
            <option value="Low Sodium">Low Sodium</option>
          </select>

          <button
            type="submit"  
            style={{ padding: '10px 20px', marginTop: '20px' }}>
            Check the Food!
          </button>
        </form>
      </div>
    </div>
  );  
}
