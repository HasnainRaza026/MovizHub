import { useState } from "react";

export function Main({ children }) {
  return <main>{children}</main>;
}

export function AllMovies({ allMovies }) {
  return (
    <div className="all-movies">
      <ul>
        {allMovies
          ? allMovies.movies.map((movie) => (
              <DisplayMovies movie={movie} key={movie.imdbID} />
            ))
          : null}
      </ul>
    </div>
  );
}

function DisplayMovies({ movie }) {
  return (
    <li>
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

  return (
    <div className="watched">
      <CloseButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {children(isOpen)}
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
