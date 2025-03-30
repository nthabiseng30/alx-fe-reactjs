import axios from "axios";

const githubApiUrl = "https://api.github.com";
const githubToken = import.meta.env.VITE_APP_GITHUB_API_KEY;

const apiClient = axios.create({
  baseURL: githubApiUrl,
  headers: {
    Authorization: `Bearer ${githubToken}`,
  },
});

const fetchUserData = async (username) => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchUserData };
