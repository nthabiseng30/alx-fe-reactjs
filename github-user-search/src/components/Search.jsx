import React, { useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    try {
      // TO DO: Fetch search results from GitHub API
      // For now, let's assume the API call is successful
      const userData = {
        avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4",
        login: "johnDoe",
        name: "John Doe",
        html_url: "https://github.com/johnDoe",
      };
      setSearchResults(userData);
    } catch (error) {
      setErrorMessage("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSearch} className="flex flex-col">
        <label className="mb-2" htmlFor="searchQuery">
          Username
        </label>
        <input
          type="search"
          id="searchQuery"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search for a GitHub user"
          className="p-2 mb-4 border border-gray-200 rounded-md"
        />
        <label className="mb-2" htmlFor="location">
          Location
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Search by location"
          className="p-2 mb-4 border border-gray-200 rounded-md"
        />
        <label className="mb-2" htmlFor="minRepos">
          Minimum Repositories
        </label>
        <input
          type="number"
          id="minRepos"
          value={minRepos}
          onChange={(event) => setMinRepos(event.target.value)}
          placeholder="Search by minimum repositories"
          className="p-2 mb-4 border border-gray-200 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Search
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : searchResults ? (
        <div>
          <img src={searchResults.avatar_url} alt={searchResults.login} />
          <h2>{searchResults.name}</h2>
          <p>
            <a href={searchResults.html_url} target="_blank">
              View {searchResults.login}'s GitHub profile
            </a>
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Search;




