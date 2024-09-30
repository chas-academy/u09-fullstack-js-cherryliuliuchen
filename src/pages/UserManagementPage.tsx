import React from 'react';
import SearchUser from '../components/UserManagementPage/SearchUser';

const UserManagementPage: React.FC = () => {
  return (
    <div className="user-management-page">
      <h2>User Management</h2>
      <SearchUser />
    </div>
  );
};

export default UserManagementPage;
