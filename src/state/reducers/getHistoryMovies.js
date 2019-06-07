import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isPendingHistoryMovies: false,
  historyMovies: [],
  errorHistoryMovies: ''
}

const getHistoryMovies = (state=initialState, action={}) => {
  switch(action.type) {
    case ACTION_TYPES.FIND_HISTORY_PENDING:
      return Object.assign({}, state, { isPendingHistoryMovies: true });
    case ACTION_TYPES.FIND_HISTORY_SUCCESS:
      return Object.assign({}, state, { isPendingHistoryMovies: false, historyMovies: action.payload });
    case ACTION_TYPES.FIND_HISTORY_FAILURE:
      return Object.assign({}, state, { isPendingHistoryMovies: false, errorHistoryMovies: action.payload });
    default:
      return state;
  }
}

export default getHistoryMovies;
