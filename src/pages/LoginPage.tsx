import React from 'react';
import Login from '../components/LoginPage/Login';

const LoginPage: React.FC = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  if (isLoggedIn) {
    return (
      <div>
        <p>You are already logged in!</p>
      </div>
    );
  }

  return (

    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '600px', width: '100%' }}>
        <Login />
        <div className="mt-3"></div>
      </div>
    </div>


  );
};

export default LoginPage;
