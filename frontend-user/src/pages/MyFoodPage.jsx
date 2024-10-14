import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyFoodList from '../components/MyFoodPage/MyFoodList';

const MyFoodPage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token);
    if (!token) {
      console.log("No token found, redirecting to login.");
      navigate('/account');
    } else {
      console.log("Token found, setting authentication state."); 
      setIsAuthenticated(true); 
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <h2>My Food List</h2>
      {isAuthenticated ? (
        <MyFoodList />
      ) : (
        <p>Loading... Redirecting to login...</p>
      )}
    </div>
  );
};

export default MyFoodPage;
