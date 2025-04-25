// frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // ou use import.meta.env.VITE_API_URL
});

export default api;
