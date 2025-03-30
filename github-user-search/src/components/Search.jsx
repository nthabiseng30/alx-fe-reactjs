import React, { useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    // TO DO: Fetch search results from GitHub API
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search for a GitHub user"
        />
        <button type="submit">Search</button>
      </form>
      {/* TO DO: Display search results */}
    </div>
  );
}

export default Search;

