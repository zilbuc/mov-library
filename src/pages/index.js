import React, { Component } from "react"
import { HomeHeader, Banner, SearchBar, SelectInput } from '../utils';
import homeBcg from '../images/bcg/homeBcg.jpg';
import Layout from "../components/layout"
import SEO from "../components/seo"
import MovieGallery from '../components/MovieComponents/MovieGallery';
import { connect } from "react-redux"
import { searchField, selectGenre, findMovies, getMovieGenres, getMovieDetails, getMovieCredits } from '../state/actions/actions';


class IndexPage extends Component {

  componentDidMount = () => {
    document.querySelector('.search-again').setAttribute('style', 'display: block');
    !(this.props.genres.length > 0) && this.props.onGetMovieGenres();
  }

  onSearchFieldChange = (event) => {
    this.props.onSearchFieldChange(event.target.value);
  }

  onSearchFieldSubmit = (event) => {
    event.preventDefault();
    this.props.onSelectGenre({ value: 0, label: '- none -'});

    if (this.props.searchField.length === 0) {
      document.querySelector('.input-error-message').setAttribute('style', 'display: block');
    } else {
      document.querySelector('.input-error-message').setAttribute('style', 'display: none');
      this.props.onFindMovies(this.props.searchField);
    }
  }

  render() {
    const { isPendingMovies, movies, errorMovies, genres, onGetMovieDetails, onGetMovieCredits, selectGenre, onSelectGenre } = this.props;
    return (
      <Layout { ...this.props }>
        <SEO title="Home" />
        <HomeHeader img={homeBcg}>
          <Banner title='face reality movie library' subtitle='your ultimate guide to movies' />
        </HomeHeader>
        <SearchBar searchFieldChange={this.onSearchFieldChange} searchFieldSubmit={this.onSearchFieldSubmit}/>
        {
          movies.length > 0 && <SelectInput selectGenre={selectGenre} onSelectGenre={onSelectGenre} genres={genres}/>
        }
        <MovieGallery
          movieData={movies}
          movieDataError={errorMovies}
          movieDataPending={isPendingMovies}
          onGetMovieDetails={onGetMovieDetails}
          onGetMovieCredits={onGetMovieCredits}
          selectGenre={selectGenre}
        />
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchField.searchField,
    selectGenre: state.selectGenre.selectGenre,
    isPendingGenres: state.getMovieGenres.isPendingGenres,
    genres: state.getMovieGenres.genres,
    errorGenres: state.getMovieGenres.errorGenres,
    isPendingMovies: state.findMovies.isPendingMovies,
    movies: state.findMovies.movies,
    errorMovies: state.findMovies.errorMovies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchFieldChange: (text) => dispatch(searchField(text)),
    onSelectGenre: (option) => dispatch(selectGenre(option)),
    onFindMovies: (movie) => dispatch(findMovies(movie)),
    onGetMovieGenres: () => dispatch(getMovieGenres()),
    onGetMovieDetails: (id) => dispatch(getMovieDetails(id)),
    onGetMovieCredits: (id) => dispatch(getMovieCredits(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
