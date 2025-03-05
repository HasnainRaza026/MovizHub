import { useState } from "react";
import "../index.css";
import "../responsive.css";
import { Header, Logo, Input, ResultsFound } from "./Header";
import { Main } from "./Main";
import { Watched } from "./Watched";
import { AllMovies } from "./AllMovies";
import { MoviesData, MoviesList, WatchedMoviesList } from "./WatchedMoviesList";
import { useFetchAllMovies } from "../hooks/useFetchAllMovies";
import { MovieDetail } from "./MovieDetail";
import { usePageTitle } from "../hooks/usePageTitle";

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  const [allMovies, setAllMovies] = useState(null);
  const [movieDetail, setMovieDetail] = useState(null);

  useFetchAllMovies(searchMovie, setAllMovies, setMovieDetail);
  usePageTitle("MovizHub");

  return (
    <div className="app">
      <Header>
        <Logo />
        <Input searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
        <ResultsFound allMovies={allMovies} />
      </Header>
      <Main setMovieDetail={setMovieDetail}>
        {(setMovieImdb, rating, setRating) => (
          <>
            <AllMovies
              allMovies={allMovies}
              setMovieImdb={setMovieImdb}
              setRating={setRating}
            />
            <Watched
              movieDetail={movieDetail}
              setMovieDetail={setMovieDetail}
              rating={rating}
            >
              {(
                isOpen,
                moviesWatched,
                setMoviesWatched,
                handleAddToWatchList
              ) =>
                movieDetail ? (
                  <MovieDetail
                    isOpen={isOpen}
                    rating={rating}
                    setRating={setRating}
                    movieDetail={movieDetail}
                    onAddToWatchList={handleAddToWatchList}
                  />
                ) : (
                  <WatchedMoviesList>
                    <MoviesData moviesWatched={moviesWatched} />
                    {isOpen ? (
                      <MoviesList
                        moviesWatched={moviesWatched}
                        setMoviesWatched={setMoviesWatched}
                      />
                    ) : null}
                  </WatchedMoviesList>
                )
              }
            </Watched>
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
