import Skeleton from "react-loading-skeleton";

export function SkeletonAllMovies({ count }) {
  return Array(count)
    .fill(0)
    .map((_, i) => (
      <div className="skeleton-all-movies">
        <div>
          <Skeleton width={36} height={53} />
        </div>
        <div className="skeleton-all-movies-data">
          <Skeleton width={250} />
          <Skeleton width={180} />
        </div>
      </div>
    ));
}
