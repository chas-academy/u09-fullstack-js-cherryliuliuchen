import React from 'react';
import ListInformation from '../components/MyInformationPage/ListInformation';
import Logout from '../components/MyInformationPage/Logout';

const MyInformationPage: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '600px', width: '100%' }}>
        <ListInformation />
        <div className="mt-3">
          <Logout />
        </div>
      </div>
     </div>
  );
};

export default MyInformationPage;
