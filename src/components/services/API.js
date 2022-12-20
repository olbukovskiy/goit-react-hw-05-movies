import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '9d6e6ee2eca71a277d41288e53d88a97';

export class SearchMoviesAPI {
  searchTrendingMovies = async page => {
    const url = `trending/movie/week?api_key=${KEY}&page=${page}`;
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  searchMovies = async (page, searchQuery) => {
    const url = `search/movie?api_key=${KEY}&query=${searchQuery}&page=${page}`;
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  searchMovieDetails = async movieId => {
    const url = `movie/${movieId}?api_key=${KEY}`;
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  searchMovieCredits = async movieId => {
    const url = `movie/${movieId}/credits?api_key=${KEY}`;
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  searchMovieReviews = async movieId => {
    const url = `movie/${movieId}/reviews?api_key=${KEY}`;
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  searchGenres = async () => {
    const url = `genre/movie/list?api_key=${KEY}`;
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function titleOptimizer(title, name) {
  if (title) {
    return title;
  }

  if (name) {
    return name;
  }

  return 'The best film in your life! :)';
}

export function dateOptimizer(releaseDate, firstDate) {
  if (releaseDate) {
    return releaseDate.slice(0, 4);
  }

  if (firstDate) {
    return firstDate.slice(0, 4);
  }

  return 'Coming soon! :)';
}

export function picturePathPlace(path) {
  if (path == null) {
    return 'https://via.placeholder.com/500x600.svg/000000/ffffff?text=Sorry+,+image+loading+is+failed';
  }

  return `https://image.tmdb.org/t/p/w500${path}`;
}

export function findGenres(genres, genreIds) {
  const genresArray = [];

  if (!genreIds) {
    return 'Other';
  }

  for (let id of genreIds) {
    let item = genres.find(genre => genre.id === id);
    if (item === undefined) {
      continue;
    } else {
      genresArray.push(item.name);
    }
  }

  if (genresArray.length === 0) {
    genresArray.push('Other');
  }

  if (genresArray.length > 3) {
    return [genresArray[0], genresArray[1], 'Other'].join(', ');
  }

  return genresArray.join(', ');
}

export function movieDetailsGenres(genres) {
  const genresArray = [];

  for (let genre of genres) {
    genresArray.push(genre.name);
  }

  if (genresArray.length === 0) {
    return 'Other';
  }

  if (genresArray.length > 3) {
    return [genresArray[0], genresArray[1], 'Other'].join(', ');
  }

  return genresArray.join(', ');
}
