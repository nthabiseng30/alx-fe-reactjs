import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    const userData = await fetchUserData(searchQuery);
    if (userData) {
      setSearchResults(userData);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search for a GitHub user"
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Looks like we can't find the user.</p>
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



