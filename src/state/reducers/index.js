import { combineReducers } from 'redux';
import findMovies from './findMovies';
import getMovieGenres from './getMovieGenres';
import getComedies from './getComedies';
import getHorrorMovies from './getHorrorMovies';
import getHistoryMovies from './getHistoryMovies';
import getMovieDetails from './getMovieDetails';
import getMovieCredits from './getMovieCredits';
import searchField from './searchField';
import selectGenre from './selectGenre';

const rootReducer = combineReducers({
  findMovies,
  getMovieGenres,
  getComedies,
  getHorrorMovies,
  getHistoryMovies,
  getMovieDetails,
  getMovieCredits,
  searchField,
  selectGenre
})

export default rootReducer;
