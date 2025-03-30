// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  // ...

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

  // ...
}



