import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/apiConfig';

const DeleteButton = ({ fdcId }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this food?');
    if (!confirmDelete) return;

    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await axios.delete(`${API_BASE_URL}/myfood/${fdcId}`, {
        headers: { 'x-auth-token': token }
      });
      window.location.reload(); // Delete and then reload the page
    } catch (error) {
      console.error('Error deleting food:', error);
    }
  };

  return (
    <button
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
