import React from 'react';
import Welcome from '../components/HomePage/Welcome';

const HomePage: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <Welcome />
    </div>
  );
};

export default HomePage;
