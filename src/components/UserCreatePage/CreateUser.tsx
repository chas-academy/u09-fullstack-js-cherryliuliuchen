import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import './CreateUser.css';  

const CreateUser: React.FC = () => {
  //Manage component state.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: false,
    isActive: true,
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  //Handle the change in input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //e.target is input, e.g. lili@gmail.com. We get 4 properties from e.target.
    const { name, value, type, checked } = e.target;
    //Updating a field in formData.
    setFormData({
      ...formData,//Copy the current data.
      [name]: type === 'checkbox' ? checked : value, //Determine whether to update the check box or text box based on the input box type
    });
  };

  //Hanle the form submits
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');//Get token from localStorage
      await axios.post(`${config.apiBaseUrl}/user/admin`, formData, {
        headers: {
          'x-auth-token': token,
        },//Sent the request to backend.
      });
      setSuccess('User created successfully.');//Set the Success message
      setError(''); //Clear the error message
      // Clear the form
      setFormData({
        name: '',
        email: '',
        password: '',
        isAdmin: false,
        isActive: true,
      });
    } catch (err) {
      setError('Error creating user. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="create-user">
      <h2>Create User</h2>
      {success && <p className="text-success">{success}</p>}
      {error && <p className="text-danger">{error}</p>}
      {/* //The function handleSubmit in the onSubmit attribute  will be called when we click submit type button. */}
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
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
        <button type="submit" className="btn btn-success mt-3">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
