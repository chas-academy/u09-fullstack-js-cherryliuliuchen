import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';


interface User {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isActive: boolean;
}

interface AccessChangeProps {
    user: User;
}

const AccessChange: React.FC<AccessChangeProps> = ({ user }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        password: '',
        isAdmin: user.isAdmin,
        isActive: user.isActive,
      });

      const [success, setSuccess] = useState('');

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
      };

      const handleSubmit =async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.put(`${config.apiBaseUrl}/user/admin/${user.email}`, {
              name: formData.name,
              password: formData.password,
              isAdmin: formData.isAdmin,
              isActive: formData.isActive,
            }, {
              headers: {
                'x-auth-token': token,
              },
            });
            setSuccess('User updated successfully.');
          } catch (err) {
            console.error('Error updating user:', err);
          }
      };

      return (
        <div className="change-user">
        <h3>Change User Details</h3>
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password (8 digits):</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              pattern="\d{8}"
              title="Password must be 8 digits."
              required
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isAdmin"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="isAdmin">Is Admin</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isActive"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="isActive">Is Active</label>
          </div>
          <button type="submit" className="btn btn-success mt-3">Save</button>
        </form>
      </div>

      );






};

export default AccessChange;

