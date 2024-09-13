import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  console.log('Authorization Header:', token ? `Bearer ${token}` : 'No Token'); // Başlık kontrolü
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
};


