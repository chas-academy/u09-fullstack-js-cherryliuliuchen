import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE_URL } from '../../api/apiConfig';

const RegisterForm = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/user/register`, { name, email, password });
      setMessage('Register successful!'); 
      if (onSuccess) onSuccess();
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.msg || 'An error occurred'}`); 
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mb-4">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <button type="submit">Register</button>
      {message && <p className="mt-3">{message}</p>} {/* Show success / failed massage */}
    </Form>
  );
};

export default RegisterForm;
