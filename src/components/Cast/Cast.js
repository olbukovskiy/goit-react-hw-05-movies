import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CastList } from 'components/CastList/CastList';
import { SearchMoviesAPI } from 'components/services/API';

const MoviesAPI = new SearchMoviesAPI();

export function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    MoviesAPI.searchMovieCredits(movieId).then(resolve => {
      setCast(resolve.data.cast);
    });
  }, [movieId]);

  return (
    <Fragment>
      {cast && (
        <div>
          {cast.length === 0 ? (
            <div>We don't have any information about this movie crew</div>
          ) : (
            <CastList cast={cast} />
          )}
        </div>
      )}
    </Fragment>
  );
}
