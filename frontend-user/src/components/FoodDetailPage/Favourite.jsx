import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../api/apiConfig';

const Favourite = ({ fdcId }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkFavourite = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      try {
        const response = await axios.get(`${API_BASE_URL}/myfood`, {
          headers: { 'x-auth-token': token }
        });
        //some() is used to check whether the fdcId of any food in response.data (i.e. the user's favorite food list) matches the fdcId of the current food.
        //const isFav = response.data.some(mat => mat.fdcId === fdcId); 
        const isFav = response.data.some(food => food.fdcId === fdcId);
        setIsFavourite(isFav);
      } catch (error) {
        console.error('Error checking favourite food:', error);
      }
    };
    checkFavourite(); 
  }, [fdcId]);

  const handleFavouriteClick = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/account'); // If do not login, navigate to account page.
      return;
    }

    try {
      if (isFavourite) {
        // Delete from Favourite
        await axios.delete(`${API_BASE_URL}/myfood/${fdcId}`, {
          headers: { 'x-auth-token': token }
        });
      } else {
        // Add to Favourite
        await axios.post(`${API_BASE_URL}/myfood`, { fdcId, description: "addfood" }, {
          headers: { 'x-auth-token': token }
        });
      }
      setIsFavourite(!isFavourite); // Switch status
    } catch (error) {
      console.error('Error toggling favourite food:', error);
    }
  };

  // return (
  //   <button
  //     onClick={handleFavouriteClick}
  //     style={{
  //       background: 'none',
  //       border: 'none',
  //       cursor: 'pointer',
  //       fontSize: '2rem',
  //       color: isFavourite ? 'red' : 'gray'
  //     }}
  //   >
  //     ♥
  //   </button>
  // );
  return (
    <button
      onClick={handleFavouriteClick}
      className={`btn btn-link fs-1 text-decoration-none ${isFavourite ? 'text-danger' : 'text-secondary'}`}
    >
      ♥
    </button>
  );
};

export default Favourite;
