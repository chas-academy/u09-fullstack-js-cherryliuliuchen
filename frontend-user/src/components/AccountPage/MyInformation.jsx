import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/apiConfig';
import Logout from './Logout'; 

const MyInformation = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found, please log in.');
        return;
      }
      try {
        const response = await axios.get(`${API_BASE_URL}/user/me`, {
          headers: {
            'x-auth-token': token,
          },
        });
        setUserInfo(response.data);
      } catch (err) {
        console.error('Error fetching user information:', err);
        setError('Failed to fetch user information.');
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!userInfo) {
    return <p>Loading user information...</p>;
  }

  return (
    <div className="container mt-5">
      <h2>My Information</h2>
      <p><strong>Name:</strong> {userInfo.name}</p>
      <p><strong>Email:</strong> {userInfo.email}</p>
      <Logout />
    </div>
  );
};

export default MyInformation;
