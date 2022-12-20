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
          <CastList cast={cast} />
        </div>
      )}
    </Fragment>
  );
}
