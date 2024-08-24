import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  // If user is not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // If user is logged in, show the protected route
  return <Outlet />;
};

export default PrivateRoute;


