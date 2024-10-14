import React from 'react';
import SearchBar from '../components/HomePage/SearchBar'; 

const HomePage = () => {
  console.log("HomePage is rendering");
  return (
    <div className="container mt-5 text-center"> {/* Center content */}
      <h1 className="mb-4">Search for your favorite food below</h1> 
      <SearchBar />
    </div>
  );
};

export default HomePage;
