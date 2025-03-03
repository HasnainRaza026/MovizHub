import { Rating } from "./Rating";

export function MovieDetail({ isOpen, rating, setRating }) {
  return (
    <>
      <MovieHeader />
      {isOpen ? (
        <MovieBody>
          <Rating rating={rating} setRating={setRating} />
          <Information />
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

function Information() {
  return (
    <div className="info">
      <p className="description">
        Kamala, a superhero fan with an imagination--particularly when it comes
        to Captain Marvel--feels like she doesn't fit in at school and sometimes
        even at home, that is until she gets superpowers like the heroes she
        admires.
      </p>
      <p>Starring Iman Vellani, Matt Lintz, Zenobia Shroff</p>
      <p>Directed by Bilall Fallah</p>
    </div>
  );
}
