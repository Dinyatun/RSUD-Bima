import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    console.log('[ProtectedRoute] Loading...');
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  console.log('[ProtectedRoute] isAuthenticated:', isAuthenticated);
  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />;
  return <>{children}</>;
};

export default ProtectedRoute; 