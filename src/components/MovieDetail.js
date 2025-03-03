import { Rating } from "./Rating";

export function MovieDetail({ isOpen, rating, setRating }) {
  return (
    <>
      <MovieHeader />
      {isOpen ? (
        <MovieBody>
          <Rating rating={rating} setRating={setRating} />
        </MovieBody>
      ) : null}
    </>
  );
}

function MovieHeader() {
  return (
    <div className="movie-header">
      <img src="assets/default-poster.png" alt="Poster" />
      <div className="movie-header-data">
        <p className="title">Ms. Marvel</p>
        <p className="other-detail">08 Jun 2022 • 169 min</p>
        <p className="other-detail">Action, Adventure, Comedy</p>
        <p className="other-detail">⭐ 6.2 IMDb rating</p>
      </div>
    </div>
  );
}

function MovieBody({ children }) {
  return <div className="movie-body">{children}</div>;
}
