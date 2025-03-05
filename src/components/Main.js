import { useState } from "react";
import { useFetchMovieDetail } from "../hooks/useFetchMovieDetail";

export function Main({ children, setMovieDetail }) {
  const [movieImdb, setMovieImdb] = useState(null);
  const [rating, setRating] = useState();
  const [isLoadingMovieDetail, setIsLoadingMovieDetail] = useState(false);

  useFetchMovieDetail(movieImdb, setMovieDetail, setIsLoadingMovieDetail);

  return (
    <main>
      {children(setMovieImdb, rating, setRating, isLoadingMovieDetail)}
    </main>
  );
}
