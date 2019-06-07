import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isPendingGetDetails: false,
  movieDetails: {},
  errorDetails: ''
}

const getMovieDetails = (state=initialState, action={}) => {
  switch(action.type) {
    case ACTION_TYPES.GET_MOVIE_DETAILS_PENDING:
      return Object.assign({}, state, { isPendingGetDetails: true });
    case ACTION_TYPES.GET_MOVIE_DETAILS_SUCCESS:
      return Object.assign({}, state, { isPendingGetDetails: false, movieDetails: action.payload });
    case ACTION_TYPES.GET_MOVIE_DETAILS_FAILURE:
      return Object.assign({}, state, { isPendingGetDetails: false, errorDetails: action.payload });
    default:
      return state;
  }
}

export default getMovieDetails;
