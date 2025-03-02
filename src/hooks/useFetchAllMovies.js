import { useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

export function useFetchAllMovies(searchMovie, setAllMovies) {
  useEffect(() => {
    if (!(searchMovie.length > 2)) {
      setAllMovies(null);
      return;
    }
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        // setIsLoading(true);
        // setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchMovie}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        const movieData = {
          quantity: data.totalResults,
          movies: data.Search,
        };

        setAllMovies(movieData);
      } catch (err) {
        if (err.name !== "AbortError") {
          setAllMovies(null);
          console.log(err.message);
          // setError(err.message);
        }
      }
    }
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [searchMovie, setAllMovies]);
}
