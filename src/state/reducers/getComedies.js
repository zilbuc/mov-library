import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isPendingComedies: false,
  comedies: [],
  errorComedies: ''
}

const getComedies = (state=initialState, action={}) => {
  switch(action.type) {
    case ACTION_TYPES.FIND_COMEDIES_PENDING:
      return Object.assign({}, state, { isPendingComedies: true });
    case ACTION_TYPES.FIND_COMEDIES_SUCCESS:
      return Object.assign({}, state, { isPendingComedies: false, comedies: action.payload });
    case ACTION_TYPES.FIND_COMEDIES_FAILURE:
      return Object.assign({}, state, { isPendingComedies: false, errorComedies: action.payload });
    default:
      return state;
  }
}

export default getComedies;
