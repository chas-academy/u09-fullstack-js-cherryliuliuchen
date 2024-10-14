import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import SearchResultTable from '../components/SearchResultPage/SearchResultTable';
import { API_BASE_URL } from '../api/apiConfig';

const SearchResultPage = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${API_BASE_URL}/food/search?query=${query}`);
        setFoods(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Search Results for "{query}"</h2>
      <SearchResultTable foods={foods} />
    </div>
  );
};

export default SearchResultPage;
