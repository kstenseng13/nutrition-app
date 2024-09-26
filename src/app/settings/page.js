"use client";

import React, { useState, useEffect } from 'react';

export default function SettingsPage() {
  // State for user info
  const [user, setUser] = useState(null); // null for no user
  const [selectedOption, setSelectedOption] = useState(''); // Default to empty string for "Null" state

  // On first load, try to load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setSelectedOption(parsedUser.dietarySelection || '');
    }
  }, []);

  // Simulate login (with or without dietary restriction)
  const loginWithSelection = (selection = '') => {
    const newUser = {
      name: "John Doe",  // Mock user details
      dietarySelection: selection  // User's dietary restriction, if any
    };
    setUser(newUser);
    setSelectedOption(selection);

    // Save the user info in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  // Simulate logout
  const logout = () => {
    setUser(null);
    setSelectedOption('');  // Reset the dropdown when user logs out
    localStorage.removeItem('user');  // Clear user info from localStorage
  };

  // Handle dropdown change
  const handleDropdownChange = (event) => {
    const newSelection = event.target.value;
    setSelectedOption(newSelection);

    // Update user's dietary selection and persist it in localStorage
    if (user) {
      const updatedUser = {
        ...user,
        dietarySelection: newSelection
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Settings Page</h1>

      {/* Simulated login/logout buttons */}
      {!user ? (
        <button onClick={() => loginWithSelection()}>Login</button>
      ) : (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}

      {/* Dropdown is always visible */}
      <label htmlFor="dietaryRestrictionsDropdown">Dietary Restrictions:</label>
      <select
        id="dietaryRestrictionsDropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        style={{ marginLeft: '10px', padding: '5px' }}
      >
        {/* The null option */}
        <option value="" disabled>Select a restriction</option>
        <option value="Low Fat">Low Fat</option>
        <option value="Low Sodium">Low Sodium</option>
      </select>

      <p style={{ marginTop: '20px' }}>
        You selected: {selectedOption || 'No option selected'}
      </p>
    </div>
  );
}
