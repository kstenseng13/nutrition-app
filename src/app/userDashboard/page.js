import { useUserContext } from '../context/userContext';
import React from 'react';

const UserDashboard = () => {
    const { user } = useUserContext(); // Access user context

    return (
        <div>
            {user ? (
                <>
                    <h1>Welcome, {user.user}!</h1>
                </>
            ) : (
                <p>Please log in.</p>
            )}
        </div>
    );
};

export default UserDashboard;
