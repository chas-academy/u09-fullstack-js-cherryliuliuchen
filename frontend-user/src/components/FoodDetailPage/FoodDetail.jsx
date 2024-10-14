import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FoodNutrientsTable from './FoodNutrientsTable';
import Favourite from './Favourite';
import { API_BASE_URL } from '../../api/apiConfig';

const initialNutrients = {
  Energy: { value: 0, unit: 'kcal' },
  Fat: { value: 0, unit: 'g' },
  'Sodium, Na': { value: 0, unit: 'mg' },
  'Total Carbohydrate': { value: 0, unit: 'g' },
  'Dietary Fiber': { value: 0, unit: 'g' },
  Sugars: { value: 0, unit: 'g' },
  Protein: { value: 0, unit: 'g' }
};

const FoodDetail = () => {
  const { fdcId } = useParams(); // getfdcId from URL
  const [foodNutrients, setFoodNutrients] = useState(initialNutrients);
  const [foodDescription, setFoodDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        setLoading(true);//Inform FoodDetail component that we are loading data now.
        // const result = await axios.get(`${API_BASE_URL}/food/${fdcId}?api_key=${USDA_API_KEY}`);//Set request to backend
        const result = await axios.get(`${API_BASE_URL}/food/${fdcId}`);//Set request to backend

        const nutrientsData = result.data.foodNutrients;//Data come from API response
        const nutrientsMap = { ...initialNutrients }; // Shallow copy

        nutrientsData.forEach(nutrient => {
          if (nutrientsMap[nutrient.nutrientName]) {//Check if each nutrient returned by the API is present in the nutrientsMap
            nutrientsMap[nutrient.nutrientName].value = nutrient.value;//If it exists, update the value of this nutrient with the data returned by the API.
          }
        });

        setFoodNutrients(nutrientsMap);
        setFoodDescription(result.data.description || `Food ID: ${fdcId}`);
        setError(null);
      } catch (error) {
        setError('Error fetching food details');
        console.error('Error fetching food details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (fdcId) {
      fetchFoodDetails();
    }
  }, [fdcId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>{foodDescription}</h2>
        <Favourite fdcId={fdcId} /> {/* Favourite button */}
      </div>
      <FoodNutrientsTable nutrients={foodNutrients} />
    </div>
  );
};

export default FoodDetail;
