import PropTypes from 'prop-types';

import {
  findGenres,
  dateOptimizer,
  picturePathPlace,
  titleOptimizer,
} from 'components/services/API';

import {
  MovieListItemContainer,
  MovieListItemImage,
  MoviesListData,
  MovieHeading,
  MovieData,
} from './Movie.styled';

export function Movie({ movieInfo, genres }) {
  const { poster_path, title, name, genre_ids, release_date, first_air_date } =
    movieInfo;
  return (
    <MovieListItemContainer>
      <MovieListItemImage>
        <img
          src={picturePathPlace(poster_path)}
          alt={titleOptimizer(title, name)}
        />
      </MovieListItemImage>
      <MoviesListData>
        <MovieHeading>{titleOptimizer(title, name)}</MovieHeading>
        <MovieData>
          <span>{findGenres(genres, genre_ids)}</span>
          <span>&#10072;</span>
          <span>{dateOptimizer(release_date, first_air_date)}</span>
        </MovieData>
      </MoviesListData>
    </MovieListItemContainer>
  );
}

Movie.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
  }).isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
