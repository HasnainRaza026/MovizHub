import Skeleton from "react-loading-skeleton";

export function SkeletonMovieDetail() {
  return (
    <div className="skeleton-movie-detail">
      <div className="skeleton-movie-detail-head">
        <div>
          <Skeleton width={100} height={148} borderRadius={8} />
        </div>
        <div className="skeleton-movie-detail-head-data">
          <Skeleton width={160} height={30} />
          <Skeleton width={130} />
          <Skeleton width={130} />
          <Skeleton width={130} />
        </div>
      </div>
      <div>
        <div className="skeleton-movie-detail-body">
          <Skeleton width={250} height={40} borderRadius={8} />
        </div>
        <div className="skeleton-movie-detail-body">
          <Skeleton width={250} height={12} />
          <Skeleton width={250} height={12} />
          <Skeleton width={250} height={12} />
          <Skeleton width={250} height={12} />
        </div>
        <div className="skeleton-movie-detail-body">
          <Skeleton width={200} height={12} />
        </div>
      </div>
    </div>
  );
}
