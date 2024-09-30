import React, { useState } from 'react';
import axios from 'axios';
import ChangeUser from './ChangeUser';
import config from '../../config';
import './SearchUser.css'; 

const SearchUser: React.FC = () => {
  //Mange search input and result state.
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<any | null>(null);
  const [error, setError] = useState('');

  //Handle the search submit
  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${config.apiBaseUrl}/user/admin/${email}`, {}, {
        headers: {
          'x-auth-token': token,
        },
      });
      setUser(response.data); // Set the response user data to set.
      setError('');  // Clear error.
    } catch (err) {
      setError('User not found or request failed.');
      setUser(null);
    }
  };

  return (
    <div className="search-user">
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="email">Search by Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && <ChangeUser user={user} />}
    </div>
  );
};

export default SearchUser;
