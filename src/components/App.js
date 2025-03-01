import { Header, Logo, Input, ResultsFound } from "./Header";
import "../index.css";
import "../responsive.css";
import { useState } from "react";

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  return (
    <div className="app">
      <Header>
        <Logo />
        <Input searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
        <ResultsFound />
      </Header>
    </div>
  );
}

export default App;
