import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { SearchMoviesAPI } from 'components/services/API';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const MoviesAPI = new SearchMoviesAPI();

export function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    MoviesAPI.searchMovieReviews(movieId).then(resolve =>
      setReviews(resolve.data.results)
    );
  }, [movieId]);

  return (
    <Fragment>
      {reviews && (
        <div>
          {reviews.length === 0 ? (
            <div>We don't have any reviews for this movie</div>
          ) : (
            <div>
              <ReviewsList reviews={reviews} />
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
}
