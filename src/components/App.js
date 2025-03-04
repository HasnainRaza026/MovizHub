import { useState } from "react";
import "../index.css";
import "../responsive.css";
import { Header, Logo, Input, ResultsFound } from "./Header";
import { AllMovies, Main, Watched } from "./Main";
import { WatchedMoviesList } from "./WatchedMoviesList";
import { useFetchAllMovies } from "../hooks/useFetchAllMovies";
import { MovieDetail } from "./MovieDetail";

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  const [allMovies, setAllMovies] = useState(null);
  const [movieDetail, setMovieDetail] = useState(null);

  useFetchAllMovies(searchMovie, setAllMovies, setMovieDetail);

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
            <Watched>
              {(isOpen) =>
                movieDetail ? (
                  <MovieDetail
                    isOpen={isOpen}
                    rating={rating}
                    setRating={setRating}
                    movieDetail={movieDetail}
                  />
                ) : (
                  <WatchedMoviesList
                    isOpen={isOpen}
                    rating={rating}
                    setRating={setRating}
                  />
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
