"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For navigation
import { useUser } from '../context/userContext';  // Import the user context

export default function FoodCheckPage() {
  const [upc, setUpc] = useState(''); // UPC input state
  const [error, setError] = useState(null);  // Error state for UPC validation
  const [selectedOption, setSelectedOption] = useState(''); // Dropdown selection state
  const { user, setUser } = useUser();  // Access user context
  const router = useRouter(); // Initialize router for navigation

  // Simulate a user login on first load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setSelectedOption(parsedUser.dietarySelection || '');
    } else {
      const simulatedUser = {
        name: "Simulated User",
        dietarySelection: "Low Fat"
      };
      setUser(simulatedUser);
      setSelectedOption(simulatedUser.dietarySelection);
      localStorage.setItem('user', JSON.stringify(simulatedUser));
    }
  }, [setUser]);

  // Handle UPC input change
  const handleChange = (event) => {
    const value = event.target.value;

    if (/^[0-9]{0,13}$/.test(value)) {
      setUpc(value);
      setError(''); // Clear error if valid
    } else {
      setError('UPC code must only contain up to 13 digits. No other characters are allowed.');
    }
  };

  // Handle dropdown change
  const handleDropdownChange = (event) => {
    const newSelection = event.target.value;
    setSelectedOption(newSelection);

    if (user) {
      const updatedUser = {
        ...user,
        dietarySelection: newSelection
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser)); // Persist updated user info
    }
  };

  // Handle form submission (validates UPC code length and processes UPC + diet)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (upc) {
      setError(null);  // Clear any errors if input is valid
      console.log(`UPC: ${upc}, Diet: ${selectedOption}`);
      router.push(`/foodrating?upc=${upc}`);  // Navigate to the FoodRatings page
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '20px' }}>UPC Food Check</h1>
  
      {/* UPC Code Entry Form */}
      <div style={{ position: 'relative', textAlign: 'center', width: '300px' }}> {/* Container with fixed width */}
        <p style={{ fontSize: '18px', marginBottom: '10px', marginTop: '20px', textAlign: 'left', width: '300px' }}>Enter UPC Code</p>
        {/* Form containing both the input and button */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={upc}
            onChange={handleChange}
            placeholder="Enter UPC code"
            maxLength="13"
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}  // Keep input width fixed
          />
          <div style={{ width: '100%', textAlign: 'left', color: 'red' }}>
            {error && <p style={{ margin: 0, wordWrap: 'break-word' }}>{error}</p>}
          </div>
  
          {/* Dietary selection dropdown */}
          <p style={{ fontSize: '18px', marginBottom: '10px', marginTop: '20px', textAlign: 'left', width: '300px' }}>Select Your Diet</p>
          <select
            value={selectedOption}
            onChange={handleDropdownChange}
            style={{ padding: '10px', width: '300px', marginBottom: '20px' }}>
            <option value="" disabled>Select a diet</option>
            <option value="Low Fat">Low Fat</option>
            <option value="Low Sodium">Low Sodium</option>
          </select>
  
          {/* Submit button to check the food (must be inside the form) */}
          <button
            type="submit"  // Set the type to "submit" to trigger form submission
            style={{ padding: '10px 20px', marginTop: '20px' }}>
            Check the Food!
          </button>
        </form>
      </div>
    </div>
  );  
}
