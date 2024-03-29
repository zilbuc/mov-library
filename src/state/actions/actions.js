import * as ACTION_TYPES from './actionTypes';

export const searchField = (text) => {
  return {
    type: ACTION_TYPES.SEARCHFIELD,
    payload: text
  }
}

export const selectGenre = (option) => {
  return {
    type: ACTION_TYPES.SELECT_GENRE,
    payload: option
  }
}

export const getMovieGenres = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.MOVIE_GENRES_PENDING });
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.GATSBY_API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => dispatch({
      type: ACTION_TYPES.MOVIE_GENRES_SUCCESS,
      payload: data.genres
    }))
    .catch(err => dispatch({
      type: ACTION_TYPES.MOVIE_GENRES_FAILURE,
      payload: err
    }))
}

export const findMovies = (movie) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.FIND_MOVIES_PENDING });
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.GATSBY_API_KEY}&query=${movie}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: ACTION_TYPES.FIND_MOVIES_SUCCESS,
      payload: data.results
    }))
    .catch(err => dispatch({
      type: ACTION_TYPES.FIND_MOVIES_FAILURE,
      payload: err
    }))
}

export const getMovieDetails = (id) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.GET_MOVIE_DETAILS_PENDING });
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.GATSBY_API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => dispatch({
      type: ACTION_TYPES.GET_MOVIE_DETAILS_SUCCESS,
      payload: data
    }))
    .catch(err => dispatch({
      type: ACTION_TYPES.GET_MOVIE_DETAILS_FAILURE,
      payload: err
    }))
}

export const getMovieCredits = (id) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.GET_MOVIE_CREDITS_PENDING });
  fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.GATSBY_API_KEY}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: ACTION_TYPES.GET_MOVIE_CREDITS_SUCCESS,
      payload: data
    }))
    .catch(err => dispatch({
      type: ACTION_TYPES.GET_MOVIE_CREDITS_FAILURE,
      payload: err
    }))
}

export const getComedies = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.FIND_COMEDIES_PENDING });
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.GATSBY_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=35`)
    .then(response => response.json())
    .then(data => dispatch({
      type: ACTION_TYPES.FIND_COMEDIES_SUCCESS,
      payload: data.results
    }))
    .catch(err => dispatch({
      type: ACTION_TYPES.FIND_COMEDIES_FAILURE,
      payload: err
    }))
}

export const getHorrorMovies = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.FIND_HORROR_PENDING });
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.GATSBY_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=27`)
    .then(response => response.json())
    .then(data => dispatch({
      type: ACTION_TYPES.FIND_HORROR_SUCCESS,
      payload: data.results
    }))
    .catch(err => dispatch({
      type: ACTION_TYPES.FIND_HORROR_FAILURE,
      payload: err
    }))
}

export const getHistoryMovies = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.FIND_HISTORY_PENDING });
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.GATSBY_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=36`)
    .then(response => response.json())
    .then(data => dispatch({
      type: ACTION_TYPES.FIND_HISTORY_SUCCESS,
      payload: data.results
    }))
    .catch(err => dispatch({
      type: ACTION_TYPES.FIND_HISTORY_FAILURE,
      payload: err
    }))
}
