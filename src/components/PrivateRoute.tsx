// src/components/PrivateRoute.tsx
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // Mark the login state
  const location = useLocation();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get(`${config.apiBaseUrl}/user/validate-token`, {
            headers: {
              'x-auth-token': token,
            },
          });

          if (response.data.valid) {
            setIsLoggedIn(true); // If has token, mark the login state as true.
          } else {
            localStorage.removeItem('token'); // If token is invalidate , clear it.
            setIsLoggedIn(false); // If does not have token, mark the login state as false.
          }
        } catch (error) {
          // Handle network issue.
          localStorage.removeItem('token');
          setIsLoggedIn(false); // Mark the login state as false.
        }
      } else {
        setIsLoggedIn(false); //  If does not have token, mark the login state as false.
      }
    };

    checkToken(); // Check the token every time the component is mounted
  }, [location]);

  // If the token has not been verified yet, render the loading status to avoid jumping immediately during the token verification process.
  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  // If not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Logged in, rendering subcomponent
  return <>{children}</>;
};

export default PrivateRoute;
