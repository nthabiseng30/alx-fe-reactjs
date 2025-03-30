// src/components/Search.jsx
import React, { useState } from 'react';

function Search() {
  // ...

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
