import React, { Component } from "react"
import { HomeHeader, Banner, SearchBar } from '../utils';
import homeBcg from '../images/bcg/homeBcg.jpg';
import Layout from "../components/layout"
import SEO from "../components/seo"
import MovieGallery from '../components/MovieComponents/MovieGallery';
import { connect } from "react-redux"
import { searchField, findMovies, getMovieDetails, getMovieCredits } from '../state/actions/actions';

class IndexPage extends Component {

  componentDidMount = () => {
    document.querySelector('.search-again').setAttribute('style', 'display: block');
    console.log(process.env.GATSBY_AFI_KEY);
    console.log(process.env.GATSBY_API_KEY);
  }

  onSearchFieldChange = (event) => {
    this.props.onSearchFieldChange(event.target.value);
  }

  onSearchFieldSubmit = (event) => {
    event.preventDefault();
    if (this.props.searchField.length === 0) {
      document.querySelector('.input-error-message').setAttribute('style', 'display: block');
    } else {
      this.props.onFindMovies(this.props.searchField);
      document.querySelector('.input-error-message').setAttribute('style', 'display: none');
    }
  }

  render() {
    const { isPendingMovies, movies, errorMovies, onGetMovieDetails, onGetMovieCredits } = this.props;
    return (
      <Layout { ...this.props }>
        <SEO title="Home" />
        <HomeHeader img={homeBcg}>
          <Banner title='face reality movie library' subtitle='your ultimate guide to movies' />
        </HomeHeader>
        <SearchBar searchFieldChange={this.onSearchFieldChange} searchFieldSubmit={this.onSearchFieldSubmit}/>
        <MovieGallery
          movieData={movies}
          movieDataError={errorMovies}
          movieDataPending={isPendingMovies}
          onGetMovieDetails={onGetMovieDetails}
          onGetMovieCredits={onGetMovieCredits}
        />
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchField.searchField,
    isPendingMovies: state.findMovies.isPendingMovies,
    movies: state.findMovies.movies,
    errorMovies: state.findMovies.errorMovies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchFieldChange: (text) => dispatch(searchField(text)),
    onFindMovies: (movie) => dispatch(findMovies(movie)),
    onGetMovieDetails: (id) => dispatch(getMovieDetails(id)),
    onGetMovieCredits: (id) => dispatch(getMovieCredits(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
