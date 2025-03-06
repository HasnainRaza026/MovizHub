import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { notifyError, notifySuccess } from "./Notifications";

export function Watched({ children, movieDetail, setMovieDetail, rating }) {
  const [isOpen, setIsOpen] = useState(true);
  const [moviesWatched, setMoviesWatched] = useState(() => {
    return JSON.parse(localStorage.getItem("watchList")) || [];
  });

  useLocalStorage("watchList", moviesWatched);

  const handleAddToWatchList = () => {
    const movieExist = moviesWatched.filter(
      (elem) => elem.title === movieDetail.title
    );
    if (movieExist.length !== 0) {
      notifyError("Movie already exist in watchlist");
      return;
    }

    const movies = [
      ...moviesWatched,
      {
        poster: movieDetail.poster,
        title: movieDetail.title,
        imdbRating: movieDetail.imdbRating,
        myRating: rating,
        runTime: movieDetail.runTime,
      },
    ];

    setMoviesWatched(movies);
    setMovieDetail(null);
    notifySuccess("Movie added to watchlist");
  };

  useEffect(() => {
    if (moviesWatched.length > 0 || movieDetail) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [moviesWatched, movieDetail]);

  return (
    <div className="watched">
      <CloseButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {children(isOpen, moviesWatched, setMoviesWatched, handleAddToWatchList)}
    </div>
  );
}
function CloseButton({ isOpen, setIsOpen }) {
  return (
    <button className="close-btn" onClick={() => setIsOpen((prev) => !prev)}>
      <img
        className="close-btn-img"
        src={isOpen ? "assets/icons/close.svg" : "assets/icons/open.svg"}
        alt={isOpen ? "Close" : "Open"}
      />
    </button>
  );
}
