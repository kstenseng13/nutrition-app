"use client";

import { useState } from 'react';

export default function UPCInput() {
  const [upcCode, setUpcCode] = useState('');
  const [error, setError] = useState('');

  // Handle UPC code input and validation
  const handleChange = (e) => {
    const value = e.target.value;

    // Regular expression: allows only numbers (0-9) and ensures max length of 13
    if (/^[0-9]{0,13}$/.test(value)) {
      setUpcCode(value);
      setError(''); // Clear error if valid
    } else {
      setError('UPC code must only contain up to 13 digits. No other characters are allowed.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (upcCode.length === 0) {
      setError('Please enter a UPC code.');
      return;
    }
    if (upcCode.length > 13) {
      setError('UPC code cannot exceed 13 digits.');
      return;
    }
    setError('UPC code is valid!');
    // No backend logic needed at this point
  };

  return (
    <div>
      <h1>Enter UPC Code</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={upcCode}
          onChange={handleChange}
          placeholder="Enter UPC code"
          maxLength="13" // Ensure no more than 13 characters
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Rate My Food</button>
      </form>
    </div>
  );
}
