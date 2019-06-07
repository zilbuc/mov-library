import { combineReducers } from 'redux';
import findMovies from './findMovies';
import getComedies from './getComedies';
import getHorrorMovies from './getHorrorMovies';
import getHistoryMovies from './getHistoryMovies';
import getMovieDetails from './getMovieDetails';
import getMovieCredits from './getMovieCredits';
import searchField from './searchField';

const rootReducer = combineReducers({
  findMovies,
  getComedies,
  getHorrorMovies,
  getHistoryMovies,
  getMovieDetails,
  getMovieCredits,
  searchField
})

export default rootReducer;
