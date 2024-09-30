import React from 'react';

const Logout: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Renavigate to login page
  };

  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
