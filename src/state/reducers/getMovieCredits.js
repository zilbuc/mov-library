import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isPendingGetCredits: false,
  movieCredits: {},
  errorCredits: ''
}

const getMovieCredits = (state=initialState, action={}) => {
  switch(action.type) {
    case ACTION_TYPES.GET_MOVIE_CREDITS_PENDING:
      return Object.assign({}, state, { isPendingGetCredits: true });
    case ACTION_TYPES.GET_MOVIE_CREDITS_SUCCESS:
      return Object.assign({}, state, { isPendingGetCredits: false, movieCredits: action.payload });
    case ACTION_TYPES.GET_MOVIE_CREDITS_FAILURE:
      return Object.assign({}, state, { isPendingGetCredits: false, errorCredits: action.payload });
    default:
      return state;
  }
}

export default getMovieCredits;
