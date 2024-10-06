"use client"; // Mark as a Client Component

import { useState, useEffect } from 'react';
import { useAuth } from '../context/userContext';

const UserLogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const { isLoggedIn, login, logout, userData } = useAuth();

    useEffect(() => {
        setIsLoading(false); // Set loading to false once data is loaded
    }, [isLoggedIn]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
        } else {
            setError('');

            try {
                const response = await fetch('/api/postUserLogin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user: formData }),
                });



                if (!response.ok) {
                    const data = await response.json();
                    console.error('Error getting data:', data);
                    if (response.status === 404) {
                        setError('Invalid username or password');
                        return;
                    } 
                    throw new Error('Network response was not ok');
                }


                const resp = await response.json();
                
                const _username = resp.userData.username;
                const _lowFat = resp.userData.lowFat;
                const _lowSodium = resp.userData.lowSodium;

                const _userData = { username: _username, lowFat: _lowFat, lowSodium: _lowSodium };
    
                console.log('User data:', _userData);
    
                // Log user in
                login(_userData);
    
                console.log('Form data submitted:', formData);

            } catch (error) {
                console.error('Error:', error);
                setError('An error occurred. Please try again.');
            }
        }
    };

    const handleLogout = () => {
        logout();
        setFormData({
            username: '',
            password: ''
        });
    };

    if (isLoading) {
        return <div>Loading...</div>; // Show loading message while data is being loaded
    }

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

                    <div className='block text-center'>
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
