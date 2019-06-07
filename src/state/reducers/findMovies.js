import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isPendingMovies: false,
  movies: [],
  errorMovies: ''
}

const findMovies = (state=initialState, action={}) => {
  switch(action.type) {
    case ACTION_TYPES.FIND_MOVIES_PENDING:
      return Object.assign({}, state, { isPendingMovies: true });
    case ACTION_TYPES.FIND_MOVIES_SUCCESS:
      return Object.assign({}, state, { isPendingMovies: false, movies: action.payload });
    case ACTION_TYPES.FIND_MOVIES_FAILURE:
      return Object.assign({}, state, { isPendingMovies: false, errorMovies: action.payload });
    default:
      return state;
  }
}

export default findMovies;
