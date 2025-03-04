export function AllMovies({ allMovies, setMovieImdb, setRating }) {
  const handleMovieClick = (imdb) => {
    setMovieImdb(imdb);
    setRating();
  };
  return (
    <div className="all-movies">
      <ul>
        {allMovies
          ? allMovies.movies.map((movie) => (
              <DisplayMovies
                movie={movie}
                onMovieClick={handleMovieClick}
                key={movie.imdbID}
              />
            ))
          : null}
      </ul>
    </div>
  );
}

function DisplayMovies({ movie, onMovieClick }) {
  return (
    <li onClick={() => onMovieClick(movie.imdbID)}>
      <img
        src={
          movie.Poster === "N/A" ? "assets/default-poster.png" : movie.Poster
        }
        alt="poster"
      />
      <div className="movie-data">
        <p>{movie.Title}</p>
        <p className="date">🗓️ {movie.Year}</p>
      </div>
    </li>
  );
}
