"use client";

import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [userData, setUserData] = useState({
        username: '',
        lowfat: false,
        lowsodium: false
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSaved, setIsSaved] = useState(false); // Flag to indicate if stored values have been loaded

    useEffect(() => {
        // Load user data from sessionStorage
        const storedUserData = sessionStorage.getItem('userData');
        const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');

        console.log('Loaded from sessionStorage:', { storedUserData, storedIsLoggedIn });

        if (storedUserData && storedIsLoggedIn) {
            console.log('Setting user data from sessionStorage:', { storedUserData, storedIsLoggedIn });
            setUserData(JSON.parse(storedUserData));
            setIsLoggedIn(JSON.parse(storedIsLoggedIn) === true);
        }

    }, []); // Add an empty dependency array to run only once

    useEffect(() => {
        if (isSaved) {
            // Save user data to sessionStorage
            console.log('Saving to sessionStorage:', { userData, isLoggedIn });
            sessionStorage.setItem('userData', JSON.stringify(userData));
            sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        }
    }, [userData, isLoggedIn, isSaved]);

    const login = (data) => {
        setIsLoggedIn(true);
        setUserData(data);
        setIsSaved(true);
        console.log('User logged in:', data);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null); // Set user to null
        setUserData({
            username: '',
            lowfat: false,
            lowsodium: false
        });
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('isLoggedIn');
    };

    return (
        <UserContext.Provider value={{ user, setUser, userData, isLoggedIn, setIsLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);
