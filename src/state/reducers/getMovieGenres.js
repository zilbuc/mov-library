import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isPendingGenres: false,
  genres: [],
  errorGenres: ''
}

const getMovieGenres = (state=initialState, action={}) => {
  switch(action.type) {
    case ACTION_TYPES.MOVIE_GENRES_PENDING:
      return Object.assign({}, state, { isPendingGenres: true });
    case ACTION_TYPES.MOVIE_GENRES_SUCCESS:
      return Object.assign({}, state, { isPendingGenres: false, genres: action.payload });
    case ACTION_TYPES.MOVIE_GENRES_FAILURE:
      return Object.assign({}, state, { isPendingGenres: false, errorGenres: action.payload });
    default:
      return state;
  }
}

export default getMovieGenres;
