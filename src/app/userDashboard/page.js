"use client";

import { useUser } from '../context/userContext';

const UserDashboard = () => {
    const { user } = useUser();

    if (!user) {
        return <p>Loading...</p>;  // Handle the case where user data isn't available yet
    }

    return (
        <div>
            <h1>Welcome to your dashboard, {user.firstName} {user.lastName}!</h1>
            <p>Your username: {user.username}</p>
        </div>
    );
};

export default UserDashboard;

