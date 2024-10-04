"use client"; // Mark as a Client Component

import { useState } from 'react';

const UserLogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

    const validateForm = () => {
        // Check all required fields
        if (!formData.username || !formData.password) {
            return 'All fields are required.';
        }
        
        // Validate username length
        if (formData.username.length < 5 || formData.username.length > 15) {
            return 'Username must be between 5 and 15 characters.';
        }

        // Validate password length
        if (formData.password.length < 8 || formData.password.length > 16) {
            return 'Password must be between 8 and 16 characters.';
        }

        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
        } else {
            setError('');
            // Simulate successful login
            setIsLoggedIn(true);
            console.log('Form data submitted:', formData);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log('User logged out');
    };

    return (

    
        <div className="mx-auto">
            {!isLoggedIn ? (
                <form role="form" aria-labelledby="login" onSubmit={handleSubmit} >
                    <div className="mb-5">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            className="p-2.5"
                            type="text"
                            placeholder="janesmith1"
                            required
                            aria-required="true"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="p-2.5"
                            placeholder="**********"
                            required
                            aria-required="true"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='block'>
                        <button type="submit" id="login" name="login" className="btn-primary inline-block">
                            Login
                        </button>
                        {error && <div className="ml-3 mt-3 text-red-500 inline-block">{error}</div>}
                    </div>
                </form>
            ) : (
                <div className='text-center'>
                    
                    <h2>Welcome, {userData.username}!</h2>
                    <br></br>
                    <br></br>
                    <button onClick={handleLogout} className="btn-primary inline-block">
                        Logout
                    </button>
                </div>
            )}
        </div>
        
    );
};

export default UserLogin;
