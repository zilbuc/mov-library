import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner, Section, Title } from '../utils';
import aboutBcg from '../images/bcg/aboutBcg.jpeg';
// import { QuickInfoWrapper } from '../components/HomePageComponents/QuickInfo';
import MovieGallery from '../components/MovieComponents/MovieGallery';

import { connect } from "react-redux"
import { getHorrorMovies, getMovieDetails, getMovieCredits } from '../state/actions/actions';

class HorrorMovies extends Component {

  componentDidMount = () => {
    this.props.onGetHorrorMovies();
  }

  render() {
    const { isPendingHorrorMovies, horrorMovies, errorHorrorMovies, onGetMovieDetails, onGetMovieCredits } = this.props;
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
          movieSearch={horrorMovies}
          movieDataError={errorHorrorMovies}
          movieSearchPending={isPendingHorrorMovies}
          onGetMovieDetails={onGetMovieDetails}
          onGetMovieCredits={onGetMovieCredits}
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
