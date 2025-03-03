export function WatchedMoviesList({ isOpen }) {
  return (
    <>
      <MoviesData />
      {isOpen ? <MoviesList /> : null}
    </>
  );
}

function MoviesData() {
  return (
    <div className="watched-data">
      <p className="heading">MOVIES YOU WATCHED (List is Empty)</p>
      <ul>
        <li>🔢 0 movies</li>
        <li>⭐ 0.00</li>
        <li>🌟 0.00</li>
        <li>⏳ 0 mins</li>
      </ul>
    </div>
  );
}

function MoviesList() {
  return (
    <div className="watched-list">
      <ul>
        <Movie />
        <Movie />
        <Movie />
      </ul>
    </div>
  );
}

function Movie() {
  return (
    <li>
      <div className="poster-data">
        <img src="assets/default-poster.png" alt="poster" />
        <div className="data">
          <p>Ms. Marvel</p>
          <ul>
            <li>⭐ 0.00</li>
            <li>🌟 0.00</li>
            <li>⏳ 0 mins</li>
          </ul>
        </div>
      </div>
      <button>
        <img src="assets/icons/delete.svg" alt="delete" />
      </button>
    </li>
  );
}
