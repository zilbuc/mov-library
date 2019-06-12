import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils';
import horrorBcg from '../images/bcg/horrorBcg.jpg';
import MovieGallery from '../components/MovieComponents/MovieGallery';
import { connect } from "react-redux"
import { getHorrorMovies, getMovieDetails, getMovieCredits } from '../state/actions/actions';

class HorrorMovies extends Component {

  componentDidMount = () => {
    document.querySelector('.search-again').setAttribute('style', 'display: none');
    !(this.props.horrorMovies.length > 0) && this.props.onGetHorrorMovies();
  }

  render() {
    const { isPendingHorrorMovies, horrorMovies, errorHorrorMovies, onGetMovieDetails, onGetMovieCredits, selectGenre } = this.props;
    return (
      <Layout { ...this.props }>
        <SEO title="Horror" />
        <PageHeader img={horrorBcg}>
          <Banner title='most popular horror movies' subtitle='in 2019'></Banner>
        </PageHeader>
        <MovieGallery
          movieData={horrorMovies}
          movieDataError={errorHorrorMovies}
          movieDataPending={isPendingHorrorMovies}
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
    isPendingHorrorMovies: state.getHorrorMovies.isPendingHorrorMovies,
    horrorMovies: state.getHorrorMovies.horrorMovies,
    errorHorrorMovies: state.getHorrorMovies.errorHorrorMovies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetHorrorMovies: () => dispatch(getHorrorMovies()),
    onGetMovieDetails: (id) => dispatch(getMovieDetails(id)),
    onGetMovieCredits: (id) => dispatch(getMovieCredits(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorrorMovies);
