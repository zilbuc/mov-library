import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner, Section, Title } from '../utils';
import aboutBcg from '../images/bcg/aboutBcg.jpeg';
// import { QuickInfoWrapper } from '../components/HomePageComponents/QuickInfo';
import MovieGallery from '../components/MovieComponents/MovieGallery';

import { connect } from "react-redux"
import { getHistoryMovies, getMovieDetails, getMovieCredits } from '../state/actions/actions';

class HistoryMovies extends Component {

  componentDidMount = () => {
    this.props.onGetHistoryMovies();
  }

  render() {
    const { isPendingHistoryMovies, historyMovies, errorHistoryMovies, onGetMovieDetails, onGetMovieCredits } = this.props;
    return (
      <Layout { ...this.props }>
        <SEO title="Home" />
        <PageHeader img={aboutBcg}>
          <Banner title='about us' subtitle='time to face reality'></Banner>
        </PageHeader>
        {/* <SearchBar searchFieldChange={this.onSearchFieldChange} searchFieldSubmit={this.onSearchFieldSubmit}/> */}
        {/* <QuickInfo />
        <Gallery /> */}
        <MovieGallery
          movieSearch={historyMovies}
          movieDataError={errorHistoryMovies}
          movieSearchPending={isPendingHistoryMovies}
          onGetMovieDetails={onGetMovieDetails}
          onGetMovieCredits={onGetMovieCredits}
        />
      </Layout>
    )
  }
}


const mapStateToProps = state => {
  return {
    isPendingHistoryMovies: state.getHistoryMovies.isPendingHistoryMovies,
    historyMovies: state.getHistoryMovies.historyMovies,
    errorHistoryMovies: state.getHistoryMovies.errorHistoryMovies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetHistoryMovies: () => dispatch(getHistoryMovies()),
    onGetMovieDetails: (id) => dispatch(getMovieDetails(id)),
    onGetMovieCredits: (id) => dispatch(getMovieCredits(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryMovies);