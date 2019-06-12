import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils';
import historyBcg from '../images/bcg/historyBcg.jpg';
import MovieGallery from '../components/MovieComponents/MovieGallery';
import { connect } from "react-redux"
import { getHistoryMovies, getMovieDetails, getMovieCredits } from '../state/actions/actions';

class HistoryMovies extends Component {

  componentDidMount = () => {
    document.querySelector('.search-again').setAttribute('style', 'display: none');
    !(this.props.historyMovies.length > 0) && this.props.onGetHistoryMovies();
  }

  render() {
    const { isPendingHistoryMovies, historyMovies, errorHistoryMovies, onGetMovieDetails, onGetMovieCredits, selectGenre } = this.props;
    return (
      <Layout { ...this.props }>
        <SEO title="History" />
        <PageHeader img={historyBcg}>
          <Banner title='most popular history movies' subtitle='in 2019'></Banner>
        </PageHeader>
        <MovieGallery
          movieData={historyMovies}
          movieDataError={errorHistoryMovies}
          movieDataPending={isPendingHistoryMovies}
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
