import React, { useState } from "react";

import SearchLogo from "./search.svg";
import "./App.css";

// const API_KEY = "1daeaeff";
let API_KEY;
if (process.env.NODE_ENV === "development") {
  API_KEY = process.env.REACT_APP_OMDB_API_KEY;
} else {
  API_KEY = process.env.OMDB_API_KEY;
}
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState("");

  return (
    <div className="App">
      <img src={SearchLogo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
