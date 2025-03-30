// src/services/githubService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
});

const fetchUserData = async (searchQuery, location, minRepos) => {
  try {
    const query = `login:${searchQuery}+location:${location}+repos:>=${minRepos}`;
    const response = await apiClient.get(`search/users?q=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchUserData };

