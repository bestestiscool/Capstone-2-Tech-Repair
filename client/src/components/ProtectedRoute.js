import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem('token');  // Check if the user is authenticated

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;  // Redirect to login if not authenticated
};

export default ProtectedRoute;
