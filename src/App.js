import React, { useEffect, useState } from "react";

import SearchLogo from "./search.svg";
import "./App.css";

let API_KEY;
if (process.env.NODE_ENV === "development") {
  API_KEY = process.env.REACT_APP_OMDB_API_KEY;
} else {
  API_KEY = process.env.OMDB_API_KEY;
}
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

function App() {
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [movies, setMovies] = useState("");

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  async function searchMovies(title) {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
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
        <img src={SearchLogo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
