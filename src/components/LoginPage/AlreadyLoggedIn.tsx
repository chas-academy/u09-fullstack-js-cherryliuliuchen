import React from 'react';
import { Link } from 'react-router-dom';

const AlreadyLoggedIn: React.FC = () => {
  return (
    <div className="alert alert-info text-center" role="alert">
      <h4>You are already logged in!</h4>
      <p>
        You can go to the <Link to="/">Home</Link> page or <Link to="/my-information">My Information</Link>.
      </p>
    </div>
  );
};

export default AlreadyLoggedIn;
