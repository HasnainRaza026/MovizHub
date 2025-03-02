export function Header({ children }) {
  return <header>{children}</header>;
}

export function Logo() {
  return (
    <div className="logo">
      <img src="assets/logo-img.png" alt="logo" />
      <p>MovizHub</p>
    </div>
  );
}

export function Input({ searchMovie, setSearchMovie }) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={searchMovie}
      onChange={(e) => setSearchMovie(e.target.value)}
    />
  );
}

export function ResultsFound({ allMovies }) {
  return (
    <p className="results-found">
      Found <strong>{allMovies ? allMovies.quantity : 0}</strong> Results
    </p>
  );
}
