import React, { useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
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



