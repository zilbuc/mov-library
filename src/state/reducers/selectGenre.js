import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = { selectGenre: { value: 0, label: '- none -'} }

const selectGenreReducer = (state=initialState, action={}) => {
  switch(action.type) {
    case ACTION_TYPES.SELECT_GENRE:
      return Object.assign({}, state, { selectGenre : action.payload });
    default:
      return state;
  }
}

export default selectGenreReducer;
