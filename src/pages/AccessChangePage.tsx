import React from 'react';
import SearchUser from '../components/AccessChangePage/AccessSearch';

const AccessChangePage: React.FC = () => {
  return (
    <div className="user-management-page">
      <h2>Access Management</h2>
      <SearchUser />
    </div>
  );
};

export default AccessChangePage;
