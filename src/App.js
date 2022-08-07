import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

// 8df10467

const API_URL = "http://www.omdbapi.com/?apikey=8df10467";

const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>MovieList</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} //e. = callback function
        />
        {/* searchTerm diambil dari, value={searchTerm} = nilai inputan */}
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {/* condition ? true : false */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found.</h2>
        </div>
      )}
    </div>
  );
}

export default App;
