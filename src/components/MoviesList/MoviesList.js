import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Box from 'Box';
import { Movie } from 'components/Movie/Movie';
import { MovieList } from './MovieList.styled';

export function MoviesList({ movies, genres, from }) {
  const location = useLocation();
  return (
    <Box p={4}>
      <MovieList>
        {from === 'home'
          ? movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`movies/${movie.id}`} state={{ from: location }}>
                    <Movie movieInfo={movie} genres={genres} />
                  </Link>
                </li>
              );
            })
          : movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`${movie.id}`} state={{ from: location }}>
                    <Movie movieInfo={movie} genres={genres} />
                  </Link>
                </li>
              );
            })}
      </MovieList>
    </Box>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
      genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
      release_date: PropTypes.string,
      first_air_date: PropTypes.string,
    }).isRequired
  ).isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  from: PropTypes.string,
};
