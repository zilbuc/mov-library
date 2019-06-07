import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isPendingHorrorMovies: false,
  horrorMovies: [],
  errorHorrorMovies: ''
}

const getHorrorMovies = (state=initialState, action={}) => {
  switch(action.type) {
    case ACTION_TYPES.FIND_HORROR_PENDING:
      return Object.assign({}, state, { isPendingHorrorMovies: true });
    case ACTION_TYPES.FIND_HORROR_SUCCESS:
      return Object.assign({}, state, { isPendingHorrorMovies: false, horrorMovies: action.payload });
    case ACTION_TYPES.FIND_HORROR_FAILURE:
      return Object.assign({}, state, { isPendingHorrorMovies: false, errorHorrorMovies: action.payload });
    default:
      return state;
  }
}

export default getHorrorMovies;
