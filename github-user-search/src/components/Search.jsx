// src/components/Search.jsx
import React, { useState } from 'react';

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
    const query = login:${searchQuery} location:${location} repos:>=${minRepos};
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

  const handleLoadMore = async () => {
    setPageNumber(pageNumber + 1);
    const query = login:${searchQuery} location:${location} repos:>=${minRepos};
    try {
      const userData = await fetchUserData(query, pageNumber + 1);
      setSearchResults([...searchResults, ...userData.items]);
    } catch (error) {
      setErrorMessage("Failed to load more results.");
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
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <label>
          Minimum repositories:
          <input
            type="number"
            value={minRepos}
            onChange={(event) => setMinRepos(event.target.value)}
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
          {searchResults.length >= 30 && (
            <button onClick={handleLoadMore}>Load More</button>
          )}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default Search;



