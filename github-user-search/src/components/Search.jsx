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

  // ...
}

export default Search;

