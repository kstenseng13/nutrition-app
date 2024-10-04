"use client";

import React, { useState, useEffect } from 'react';
import { useUser } from '../context/userContext';  // Import the user context

export default function FoodCheckPage() {
  const [upc, setUpc] = useState(''); // UPC input state
  const [error, setError] = useState(null);  // Error state for UPC validation
//  const [user, setUser] = useState(null); // User state (null means no user)
  const [selectedOption, setSelectedOption] = useState(''); // Dropdown selection state

  const { user, setUser } = useUser();  // Access user context

  // Load user's dietary preference when component loads
//   useEffect(() => {
//     if (user) {
//       setSelectedOption(user.dietarySelection || '');
//     }
//   }, [user]);

  // Simulate a user login on first load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      // If there's a user in localStorage, load that user
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setSelectedOption(parsedUser.dietarySelection || '');
    } else {
      // Simulate a logged-in user by setting mock user details
      const simulatedUser = {
        name: "Simulated User",  // Mock user name
        dietarySelection: "Low Fat"  // Default dietary preference
      };
      setUser(simulatedUser);
      setSelectedOption(simulatedUser.dietarySelection);

      // Save this mock user in localStorage to simulate persistence
      localStorage.setItem('user', JSON.stringify(simulatedUser));
    }
  }, [setUser]);

  // Simulate logout
  const logout = () => {
    setUser(null);
    setSelectedOption('');
    localStorage.removeItem('user');
  };
  // To be removed once login is squared away

  // Handle UPC input change
  const handleChange = (event) => {
    //setUpc(event.target.value);
    const value = event.target.value;

    // Regular expression: allows only numbers (0-9) and ensures max length of 13
    if (/^[0-9]{0,13}$/.test(value)) {
      setUpcCode(value);
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
        setError(null);  // Clear any errors if input is valid
        console.log(`UPC: ${upc}, Diet: ${selectedOption}`);
        // Add logic for checking food with UPC and selected diet
      };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '20px' }}>UPC Food Check</h1>
      
      {/* UPC Code Entry Form */}
      <div>
        <h1>Enter UPC Code</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={upc}
            onChange={handleChange}
            placeholder="Enter UPC code"
            maxLength="13" // Ensure no more than 13 characters
            style={{ padding: '10px', width: '300px', marginBottom: '10px' }}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error if invalid UPC */}
        </form>
      </div>

      <p style={{ fontSize: '18px', marginBottom: '10px', marginTop: '20px' }}>Select Your Diet</p>
      <select 
        value={selectedOption} 
        onChange={handleDropdownChange} 
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}>
        <option value="" disabled>Select a diet</option>
        <option value="Low Fat">Low Fat</option>
        <option value="Low Sodium">Low Sodium</option>
      </select>

      {/* Simulated login/logout buttons */}
      {!user ? (
        <button onClick={() => setUser({ name: "Simulated User", dietarySelection: "Low Fat" })}>Login</button>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}

      <p style={{ marginTop: '20px' }}>
        You selected: {selectedOption || 'No option selected'}
      </p>
    </div>
  );
}
