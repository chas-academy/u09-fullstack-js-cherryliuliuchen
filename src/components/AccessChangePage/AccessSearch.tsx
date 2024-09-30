import React, { useState } from 'react';
import axios from 'axios';
import AccessChange from './AccessChange';
import config from '../../config';


const AccessSearch: React.FC = () => {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState<any | null>(null);
    const [error, setError] = useState('');

    const handleSearch =async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`${config.apiBaseUrl}/user/admin/${email}`,{},{
                headers: {
                    'x-auth-token': token,
                },
            });
            setUser(response.data);
            setError('');
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
          {/* Add blank line */}
          <button type="submit" className="btn btn-primary mt-3">Search</button>
        </form>
  
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {user && <AccessChange user={user} />}
      </div>

    );

};

export default AccessSearch;