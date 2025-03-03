import { useState } from "react";
import "../index.css";
import "../responsive.css";
import { Header, Logo, Input, ResultsFound } from "./Header";
import { AllMovies, Main, Watched } from "./Main";
import { WatchedMoviesList } from "./WatchedMoviesList";
import { useFetchAllMovies } from "../hooks/useFetchAllMovies";

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
        <AllMovies allMovies={allMovies} />
        <Watched>
          <WatchedMoviesList />
        </Watched>
      </Main>
    </div>
  );
}

export default App;
