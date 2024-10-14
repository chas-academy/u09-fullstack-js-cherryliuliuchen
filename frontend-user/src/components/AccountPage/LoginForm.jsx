import React, { useState } from 'react';
import { Form } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../api/apiConfig';

const LoginForm = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, { email, password });
      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token); // Save token
        setMessage('Login successful!');
        if (onSuccess) onSuccess();
        navigate('/my-information'); // If login success, transfer to  MyInformationPage
      }
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.msg || 'An error occurred'}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mb-4"> 
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <button type="submit">Login</button> 
      {message && <p className="mt-3">{message}</p>} {/* Show success or faled message */}
    </Form>
  );
};

export default LoginForm;
