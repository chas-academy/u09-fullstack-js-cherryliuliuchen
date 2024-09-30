import React from 'react';
import CreateUser from '../components/UserCreatePage/CreateUser';


const UserCreatePage: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <CreateUser />
    </div>
  );
};

export default UserCreatePage;
