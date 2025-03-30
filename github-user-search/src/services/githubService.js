import { Octokit } from "@octokit/octokit";

const octokit = new Octokit({
  auth: import.meta.env.VITE_APP_GITHUB_API_KEY,
});

const getUserData = async (username) => {
  try {
    const response = await octokit.rest.users.getByUsername({
      username,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getUserData };

