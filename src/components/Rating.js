import { useState } from "react";

export function Rating({ rating, setRating }) {
  const [hoverStars, setHoverStars] = useState();

  return (
    <div className="rating-box">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <Stars
            key={i}
            id={i}
            hoverStars={hoverStars}
            setHoverStars={setHoverStars}
            rating={rating}
            setRating={setRating}
          />
        ))}
    </div>
  );
}

function Stars({ id, hoverStars, setHoverStars, rating, setRating }) {
  return (
    <img
      src={
        id <= hoverStars || id <= rating
          ? "assets/icons/star-fill.svg"
          : "assets/icons/star-unfill.svg"
      }
      alt="star"
      data-id={id}
      onMouseEnter={(e) => setHoverStars(e.target.dataset.id)}
      onMouseLeave={() => setHoverStars()}
      onClick={(e) => setRating(e.target.dataset.id)}
    />
  );
}
