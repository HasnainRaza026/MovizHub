import { useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

export function useFetchMovieDetail(movieImdb, setMovieDetail) {
  useEffect(() => {
    if (!movieImdb) {
      return;
    }
    const controller = new AbortController();
    async function fetchMovieDetail() {
      try {
        // setIsLoading(true);
        // setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieImdb}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        const movieData = {
          poster: data.Poster,
          title: data.Title,
          releaseDate: data.Released,
          runTime: data.Runtime,
          genra: data.Genre,
          plot: data.Plot,
          actors: data.Actors,
          director: data.Director,
          imdbRating: data.imdbRating,
        };

        setMovieDetail(movieData);
      } catch (err) {
        if (err.name !== "AbortError") {
          //   setAllMovies(null);
          console.log(err.message);
          // setError(err.message);
        }
      }
    }
    fetchMovieDetail();

    return () => {
      controller.abort();
    };
  }, [movieImdb, setMovieDetail]);
}
