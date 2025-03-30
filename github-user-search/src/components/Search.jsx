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
      {/* ... */}
      {loading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        searchResults.length > 0 && (
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
        )
      )}
    </div>
  );
}

export default Search;

