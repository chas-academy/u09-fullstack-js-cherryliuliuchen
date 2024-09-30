import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config';
import './ListInformation.css'; 

interface UserInfo {
  name: string;
  email: string;
}

const ListInformation: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${config.apiBaseUrl}/user/me`, {
          headers: {
            'x-auth-token': token,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-info">
      <h2>User Information</h2>
      <p><strong>Name:</strong> {userInfo.name}</p>
      <p><strong>Email:</strong> {userInfo.email}</p>
    </div>
  );
};

export default ListInformation;
