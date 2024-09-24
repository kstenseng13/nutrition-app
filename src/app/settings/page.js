"use client";

import React, { useState, useEffect } from 'react';

export default function SettingsPage() {
  // Mock user state to simulate a logged-in user or a null user (not logged in)
  const [user, setUser] = useState(null); // null for no user
  const [selectedOption, setSelectedOption] = useState(''); // Default to empty string for "Null" state

  // Simulate login (with or without dietary restriction)
  const loginWithSelection = (selection = '') => {
    setUser({
      name: "John Doe",  // Mock user details
      dietarySelection: selection  // User's dietary restriction, if any
    });
  };

  const logout = () => {
    setUser(null);
    setSelectedOption('');  // Reset the dropdown when the user logs out
  };

  // Set the user's dietary selection as state if they have already selected
  useEffect(() => {
    if (user && user.dietarySelection) {
      setSelectedOption(user.dietarySelection);
    } else {
      setSelectedOption(''); // Set to "Null" if no selection or user not logged in
    }
  }, [user]);

  // Handle dropdown change
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);

    // If user is logged in, save the selection (simulating saving to backend)
    if (user) {
      setUser((prevUser) => ({
        ...prevUser,
        dietarySelection: event.target.value
      }));
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
        <option value="Low S odium">Low Sodium</option>
      </select>

      <p style={{ marginTop: '20px' }}>
        You selected: {selectedOption || 'No option selected'}
      </p>
    </div>
  );
}
