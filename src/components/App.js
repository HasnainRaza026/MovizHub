import { Header, Logo, Input, ResultsFound } from "./Header";
import "../index.css";
import "../responsive.css";
import { useState } from "react";
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
    </div>
  );
}

export default App;
