// src/services/githubService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
});

const fetchUserData = async (query, pageNumber) => {
  try {
    const response = await apiClient.get(`/search/users?q=${query}&page=${pageNumber}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchUserData };

