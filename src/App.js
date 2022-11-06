import React, { useEffect, useState } from "react";

import "./App.css";
import SearchLogo from "./search.svg";
import AllMovies from "./components/Movies";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  async function searchMovies(title) {
    if (title) {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    }
  }

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          value={searchTerm}
          placeholder="Search for movies"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img
          src={SearchLogo}
          className="App-logo"
          alt="logo"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      <AllMovies movies={movies} />
    </div>
  );
}

export default App;
