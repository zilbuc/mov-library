import React, { Component } from "react"
import { Link } from "gatsby"
import { HomeHeader, Banner, BannerButton, SearchBar } from '../utils';
import homeBcg from '../images/bcg/homeBcg.jpeg';

import Layout from "../components/layout"
import SEO from "../components/seo"
// import QuickInfo from '../components/HomePageComponents/QuickInfo';
// import Gallery from '../components/HomePageComponents/Gallery2';
import MovieGallery from '../components/MovieComponents/MovieGallery';
import { connect } from "react-redux"

import { searchField, findMovies, getMovieDetails, getMovieCredits } from '../state/actions/actions';

class IndexPage extends Component {

  componentDidMount = () => {
    document.querySelector('.search-again').setAttribute('style', 'display: block');

    //
    // const details = await getData.getMovieDetails(530);
    // const credits = await getData.getMovieCredits(530);
    //
    // console.log('did mount details: ', details.results.id);
    // console.log('did mount credits: ', credits.results.id);
    //
    // this.setState({ comedyListPending: true });
    // const comedies = await getData.getComedyList();
    // this.setState({ comedyListPending: false });
    // if (comedies.error) {
    //   this.setState({ comedyListError: true });
    // } else {
    //   this.setState({ comedyList: [ ...comedies.results ] });
    // }
    //
    // const historyMovies = await getData.getHistoryList();
    // this.setState({ historyList: [ ...historyMovies ]});
    //
    // const horrorMovies = await getData.getHorrorList();
    // this.setState({ horrorList: [ ...horrorMovies ]});
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
        {/* <QuickInfo />
        <Gallery /> */}
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
