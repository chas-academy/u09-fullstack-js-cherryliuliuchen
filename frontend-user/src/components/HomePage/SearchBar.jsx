import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap'; 
import './SearchBar.css'; 

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form to submit defaultly
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <Form onSubmit={handleSearch} className="search-bar-form">
      <Form.Group className="text-center">
        <Form.Control
          type="text"
          placeholder="Search for food"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input" // Custom class for controlling input box width
        />
      </Form.Group>
      <div className="text-center">
        <button type="submit">Search</button> {/* Submit with form */}
      </div>
    </Form>
  );
};

export default SearchBar;
