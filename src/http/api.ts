import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;