// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    const query = `login:${searchQuery} location:${location} repos:>=${minRepos}`;
    try {
      const userData = await fetchUserData(query, pageNumber);
      if (userData.items.length === 0) {
        setErrorMessage("Looks like we can't find the user.");
        setSearchResults([]);
      } else {
        setSearchResults(userData.items);
      }
    } catch (error) {
      setErrorMessage("An error occurred while searching for users.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'searchQuery':
        setSearchQuery(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'minRepos':
        setMinRepos(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch}>
        <label>
          Search by username:
          <input
            type="text"
            name="searchQuery"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Minimum repositories:
          <input
            type="number"
            name="minRepos"
            value={minRepos}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Search</button>
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


