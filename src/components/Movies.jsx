import { Fragment } from "react";
import MovieCard from "./MovieCard";

function AllMovies({ movies }) {
  return (
    <Fragment>
      {
        movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
        ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </Fragment>
  )
}

export default AllMovies;