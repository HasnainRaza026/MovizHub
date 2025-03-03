import { useState } from "react";

export function Main({ children }) {
  const [movieDetail, setMovieDetail] = useState(null);
  return <main>{children(movieDetail, setMovieDetail)}</main>;
}

export function AllMovies({ allMovies, setMovieDetail }) {
  return (
    <div className="all-movies">
      <ul>
        {allMovies
          ? allMovies.movies.map((movie) => (
              <DisplayMovies
                movie={movie}
                setMovieDetail={setMovieDetail}
                key={movie.imdbID}
              />
            ))
          : null}
      </ul>
    </div>
  );
}

function DisplayMovies({ movie, setMovieDetail }) {
  return (
    <li onClick={(e) => setMovieDetail(movie.imdbID)}>
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

export function Watched({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [rating, setRating] = useState();

  return (
    <div className="watched">
      <CloseButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {children(isOpen, rating, setRating)}
    </div>
  );
}

function CloseButton({ isOpen, setIsOpen }) {
  return (
    <button className="close-btn" onClick={() => setIsOpen((prev) => !prev)}>
      <img
        src={isOpen ? "assets/icons/close.svg" : "assets/icons/open.svg"}
        alt={isOpen ? "Close" : "Open"}
      />
    </button>
  );
}
