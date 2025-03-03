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

  useFetchAllMovies(searchMovie, setAllMovies);

  return (
    <div className="app">
      <Header>
        <Logo />
        <Input searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
        <ResultsFound allMovies={allMovies} />
      </Header>
      <Main>
        {(movieDetail, setMovieDetail) => (
          <>
            <AllMovies
              allMovies={allMovies}
              movieDetail={movieDetail}
              setMovieDetail={setMovieDetail}
            />
            <Watched>
              {(isOpen, rating, setRating) =>
                movieDetail ? (
                  <MovieDetail
                    isOpen={isOpen}
                    rating={rating}
                    setRating={setRating}
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
