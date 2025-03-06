export function MovieDetail({ children }) {
  return <>{children}</>;
}

export function MovieHeader({ movieDetail }) {
  return (
    <div className="movie-header">
      <img
        src={
          movieDetail.poster ? movieDetail.poster : "assets/default-poster.png"
        }
        alt="Poster"
      />
      <div className="movie-header-data">
        <p className="title">{movieDetail.title}</p>
        <p className="other-detail">
          {movieDetail.releaseDate} • {movieDetail.runTime}
        </p>
        <p className="other-detail">{movieDetail.genra}</p>
        <p className="other-detail">⭐ {movieDetail.imdbRating} IMDb rating</p>
      </div>
    </div>
  );
}

export function MovieBody({ children }) {
  return <div className="movie-body">{children}</div>;
}

export function Information({ movieDetail }) {
  return (
    <div className="info">
      <p className="description">{movieDetail.plot}</p>
      <p>Starring {movieDetail.actors}</p>
      <p>Directed by {movieDetail.director}</p>
    </div>
  );
}
