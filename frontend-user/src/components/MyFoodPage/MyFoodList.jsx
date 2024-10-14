import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/apiConfig';
import DeleteButton from './DeleteButton'; // import the delete button
import { Link } from 'react-router-dom';

const MyFoodList = () => {
  const [myFoods, setMyFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyFoods = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found, please log in.');
        return;
      }
      try {
        const response = await axios.get(`${API_BASE_URL}/myfood`, {
          headers: { 'x-auth-token': token },
        });
        setMyFoods(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching my food list:', err);
        setError('Failed to fetch my food list.');
      } finally {
        setLoading(false);
      }
    };

    fetchMyFoods();
  }, []); //This useEffect will only be executed when the component is first loaded.

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Energy (kcal)</th>
            <th>Fat (g)</th>
            <th>Carbohydrate (g)</th>
            <th>Protein (g)</th>
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {myFoods.map((food, index) => (
            <tr key={index}>
              <td>
                <Link to={`/food/${food.fdcId}`}>{food.description}</Link>
              </td>
              <td>{`${food.energy.value} ${food.energy.unit}`}</td>
              <td>{`${food.fat.value} ${food.fat.unit}`}</td>
              <td>{`${food.carbohydrate.value} ${food.carbohydrate.unit}`}</td>
              <td>{`${food.protein.value} ${food.protein.unit}`}</td>
              <td>
                <DeleteButton fdcId={food.fdcId} /> {/* Pass fdcId to DeleteButton */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyFoodList;
