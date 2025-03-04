export function WatchedMoviesList({ children }) {
  return <>{children}</>;
}

export function MoviesData({ moviesWatched }) {
  function average(toFindAvg) {
    if (moviesWatched.length === 0) return 0; // Prevent division by zero
    const sum = moviesWatched.reduce(
      (acc, movie) =>
        acc +
        Number(
          toFindAvg === "runTime"
            ? Number(movie[toFindAvg].split(" ")[0])
            : movie[toFindAvg]
        ),
      0
    );
    return (sum / moviesWatched.length).toFixed(
      toFindAvg === "runTime" ? 0 : 1
    ); // Rounded to 1 or 0 decimal places
  }

  const totalMovies = moviesWatched.length;
  const avgImdbRating = average("imdbRating");
  const avgMyRating = average("myRating");
  const avgrunTime = average("runTime");

  return (
    <div className="watched-data">
      <p className="heading">
        MOVIES YOU WATCHED {totalMovies < 1 ? "(List is Empty)" : ""}
      </p>
      <ul>
        <li>🔢 {totalMovies} movies</li>
        <li>⭐ {avgImdbRating}</li>
        <li>🌟 {avgMyRating}</li>
        <li>⏳ {avgrunTime} mins</li>
      </ul>
    </div>
  );
}

export function MoviesList({ moviesWatched, setMoviesWatched }) {
  const handleDeleteMovies = (title) => {
    const movies = moviesWatched.filter((elem) => elem.title !== title);
    setMoviesWatched(movies);
  };
  return (
    <div className="watched-list">
      <ul>
        {moviesWatched.map((movie, i) => (
          <Movie movie={movie} onDeleteMovies={handleDeleteMovies} key={i} />
        ))}
      </ul>
    </div>
  );
}

function Movie({ movie, onDeleteMovies }) {
  return (
    <li>
      <div className="poster-data">
        <img
          src={movie.poster ? movie.poster : "assets/default-poster.png"}
          alt="poster"
        />
        <div className="data">
          <p>{movie.title}</p>
          <ul>
            <li>⭐ {movie.imdbRating}</li>
            <li>🌟 {movie.myRating}.0</li>
            <li>⏳ {movie.runTime}</li>
          </ul>
        </div>
      </div>
      <button onClick={() => onDeleteMovies(movie.title)}>
        <img src="assets/icons/delete.svg" alt="delete" />
      </button>
    </li>
  );
}
