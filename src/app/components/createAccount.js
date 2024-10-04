"use client"; // Mark as a Client Component

import { useState } from 'react';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        terms: false,
    });

    const [error, setError] = useState('');

    const validateForm = () => {
        const usernameRegex = /^\S+$/; // No spaces in username

        if (!formData.firstName || !formData.lastName || !formData.username || !formData.email || !formData.password || !formData.repeatPassword) {
            return 'All fields are required.';
        }

        if (formData.username.length < 5 || formData.username.length > 15) {
            return 'Username must be between 5 and 15 characters.';
        }

        if (formData.password.length < 8 || formData.password.length > 16) {
            return 'Password must be between 8 and 16 characters.';
        }

        if (!usernameRegex.test(formData.username)) {
            return 'Username cannot contain spaces.';
        }

        if (formData.password !== formData.repeatPassword) {
            return 'Passwords do not match.';
        }

        if (!formData.terms) {
            return 'You must agree to the terms and conditions.';
        }

        if (!formData.lowFat || !formData.lowSodium) {
            return 'Please pick you dietary restriction.';
        }

        return '';
    };

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        // Ensure name matches the state properties
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
        } else {
            setError('');
            // Handle form submission (e.g., send data to an API)
            console.log('Form data submitted:', formData);
            // Reset form if needed
            setFormData({
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                repeatPassword: '',
                terms: false,
            });
        }
    };

    return (
        <form role="form" aria-labelledby="register" onSubmit={handleSubmit}>
            <div>
                <div className="inline-block mb-5 w-full xl:w-[49%]">
                    <label htmlFor="firstName">First</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="p-2.5"
                        placeholder="Jane"
                        required
                        aria-required="true"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="inline-block mb-5 w-full xl:w-1/2">
                    <label htmlFor="lastName">Last</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="p-2.5"
                        placeholder="Smith"
                        required
                        aria-required="true"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
            </div>
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
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-2.5"
                    placeholder="name@email.com"
                    required
                    aria-required="true"
                    value={formData.email}
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
            <div className="mb-5">
                <label htmlFor="repeat-password">Confirm password</label>
                <input
                    type="password"
                    id="repeat-password"
                    name="repeatPassword"
                    className="p-2.5"
                    placeholder="**********"
                    required
                    aria-required="true"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="ms-2 text-sm font-medium">
                    {/* add selections to user profile? */}
                    Select your Dietary Restrictions:
                </label>
                
                
                <div className="flex items-start mb-5">
                
                    <div className="flex justify-center">
                        <input
                            id="lowSodium"
                            name="lowSodium"
                            type="checkbox"
                            //required
                            aria-required="true"
                            checked={formData.lowSodium}
                            onChange={handleChange}
                        />
                        <label htmlFor="lowSodium" className="ms-2 text-sm font-medium">
                            {/* add selections to user profile? */}
                            Low-Sodium
                        </label>
                    </div>
                    <div className="flex justify-center ml-8">
                    <input
                            id="lowFat"
                            name="lowFat"
                            type="checkbox"
                            //required
                            aria-required="true"
                            checked={formData.lowFat}
                            onChange={handleChange}
                        />
                        <label htmlFor="lowFat" className="ms-2 text-sm font-medium ml-4">
                        {/* add selections to user profile? */}
                            Low-Fat
                        </label>
                    </div>
            </div> 

            <div className="flex items-start mb-5">
            
                <div className="flex items-center h-5">
                    <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        aria-required="true"
                        checked={formData.terms}
                        onChange={handleChange}
                    />
                    <label htmlFor="terms" className="ms-2 text-sm font-medium">
                    {/* make this direct to a terms and condition page eventually */}
                    I agree with the <a href="/register" className="text-linkBlue hover:underline hover:text-gunmetal">terms and conditions</a>
                    </label>
                </div>
            </div>
                
            </div>
            <div className='block text-center'>
                <button type="submit" id="login" name="joinRewards" className="btn-primary inline-block">
                Create Account
            </button>
            {error && <div className="ml-3 mt-3 text-red-500 inline-block">{error}</div>}
            </div>
        </form>
    );
};

export default CreateAccount;