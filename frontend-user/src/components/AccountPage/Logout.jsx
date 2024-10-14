import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../api/apiConfig';

const Logout = () => {
  const navigate = useNavigate();

  // Check if there is a token in localStorage when the component is mounted
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.clear(); // If there is no token, clear localStorage
      console.log('No token found, clearing localStorage.');
    }
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found, unable to log out.');
      return;
    }
    try {
      const response = await axios.post(
        `${API_BASE_URL}/user/logout`,
        {},
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      console.log(response.data.msg);
      localStorage.removeItem('token'); // Clear token
      navigate('/account'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout}  type="submit">
      Logout
    </button>
  );
};

export default Logout;
