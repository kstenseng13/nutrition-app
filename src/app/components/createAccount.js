"use client";

import { useState } from 'react';
import useSanitizedInput from '../hooks/useSanitizedInput';
import { useRouter } from 'next/navigation';
import { useUser } from '../context/userContext';

const CreateAccount = () => {
    const router = useRouter();
    const { sanitizeInput } = useSanitizedInput();
    const { setUser } = useUser();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
        } 
        else {
            // Call the API to create the user account (when there's something legit for this)
            try {
                const sanitizedData = {
                    ...formData,
                    firstName: sanitizeInput(formData.firstName),
                    lastName: sanitizeInput(formData.lastName),
                    username: sanitizeInput(formData.username),
                    email: sanitizeInput(formData.email),
                    password: sanitizeInput(formData.password),
                    repeatPassword: sanitizeInput(formData.repeatPassword),
                };
                
                // const response = await fetch('/api/createAccount', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(formData),
                // });

                // if (!response.ok) {
                //     throw new Error('Failed to create account');
                // }

                // Redirect to the user dashboard upon successful submission, or whatever we decide to use.
                setUser(sanitizedData);

                router.push('/userDashboard');
            } 
            catch (error) {
                setError(error.message);
            }
        }
    };

    return (
        <form role="form" aria-labelledby="register" onSubmit={handleSubmit} className='w-full'>
            <div>
                <div className="inline-block mb-5 w-full 2xl:w-[49%]">
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
                <div className="inline-block mb-5 w-full 2xl:w-1/2">
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
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-medium">
                    {/* make this direct to a terms and condition page eventually */}
                    I agree with the <a href="/register" className="text-linkBlue hover:underline hover:text-gunmetal">terms and conditions</a>
                </label>
            </div>
            <div className='block'>
                <button type="submit" id="login" name="joinRewards" className="btn-primary inline-block">
                Create Account
            </button>
            {error && <div className="ml-3 mt-3 text-red-500 inline-block">{error}</div>}
            </div>
            
        </form>
    );
};

export default CreateAccount;