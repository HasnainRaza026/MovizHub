import { useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";
import "../index.css";
import "../responsive.css";
import { Header, Logo, Input, ResultsFound } from "./Header";
import { Main } from "./Main";
import { Watched } from "./Watched";
import { AllMovies } from "./AllMovies";
import { MoviesData, MoviesList, WatchedMoviesList } from "./WatchedMoviesList";
import { useFetchAllMovies } from "../hooks/useFetchAllMovies";
import {
  Information,
  MovieBody,
  MovieDetail,
  MovieHeader,
} from "./MovieDetail";
import { usePageTitle } from "../hooks/usePageTitle";
import { SkeletonMovieDetail } from "./SkeletonMovieDetail";
import { Rating } from "./Rating";

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  const [allMovies, setAllMovies] = useState(null);
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoadingAllMovies, setIsLoadingAllMovies] = useState(false);

  useFetchAllMovies(
    searchMovie,
    setAllMovies,
    setMovieDetail,
    setIsLoadingAllMovies
  );
  usePageTitle("MovizHub");

  return (
    <div className="app">
      <SkeletonTheme
        baseColor="#00000033"
        highlightColor="#3f3f3f"
        borderRadius={6}
      >
        <Header>
          <Logo />
          <Input searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
          <ResultsFound allMovies={allMovies} />
        </Header>
        <Main setMovieDetail={setMovieDetail}>
          {(setMovieImdb, rating, setRating, isLoadingMovieDetail) => (
            <>
              <AllMovies
                allMovies={allMovies}
                setMovieImdb={setMovieImdb}
                setRating={setRating}
                isLoadingAllMovies={isLoadingAllMovies}
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
                  isLoadingMovieDetail ? (
                    <SkeletonMovieDetail />
                  ) : movieDetail ? (
                    <MovieDetail>
                      <MovieHeader movieDetail={movieDetail} />
                      {isOpen ? (
                        <MovieBody>
                          <Rating
                            rating={rating}
                            setRating={setRating}
                            onAddToWatchList={handleAddToWatchList}
                          />
                          <Information movieDetail={movieDetail} />
                        </MovieBody>
                      ) : null}
                    </MovieDetail>
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
      </SkeletonTheme>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
