import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the context

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth(); // Get the login status

    if (!isLoggedIn) {
        // If not logged in, redirect to the login page
        return <Navigate to="/login" replace />;
    }

    // If logged in, show the requested page
    return children;
};

export default ProtectedRoute;
