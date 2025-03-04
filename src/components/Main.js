import { useState } from "react";
import { useFetchMovieDetail } from "../hooks/useFetchMovieDetail";

export function Main({ children, setMovieDetail }) {
  const [movieImdb, setMovieImdb] = useState(null);
  const [rating, setRating] = useState();

  useFetchMovieDetail(movieImdb, setMovieDetail);

  return <main>{children(setMovieImdb, rating, setRating)}</main>;
}
