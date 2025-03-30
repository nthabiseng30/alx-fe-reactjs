// src/components/Search.jsx
import React, { useState } from 'react';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    try {
      const userData = await fetchUserData(searchQuery, location, minRepos);
      setSearchResults(userData.items);
    } catch (error) {
      setErrorMessage("An error occurred while searching for users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSearch} className="flex flex-col space-y-4">
        <label className="block">
          <span className="block text-sm font-medium mb-2">Search by username:</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium mb-2">Location:</span>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium mb-2">Minimum repositories:</span>
          <input
            type="number"
            value={minRepos}
            onChange={(event) => setMinRepos(event.target.value)}
            className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((user) => (
              <li key={user.id}>
                <img src={user.avatar_url} alt={user.login} />
                <h3>
                  <a href={user.html_url} target="_blank">
                    {user.login}
                  </a>
                </h3>
                <p>Location: {user.location}</p>
                <p>Repositories: {user.public_repos}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default Search;

