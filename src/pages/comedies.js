import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner, Section, Title } from '../utils';
import aboutBcg from '../images/bcg/aboutBcg.jpeg';
// import { QuickInfoWrapper } from '../components/HomePageComponents/QuickInfo';
import MovieGallery from '../components/MovieComponents/MovieGallery';

import { connect } from "react-redux"
import { getComedies, getMovieDetails, getMovieCredits } from '../state/actions/actions';

class Comedies extends Component {

  componentDidMount = () => {
    this.props.onGetComedies();
  }

  render() {
    const { isPendingComedies, comedies, errorComedies, onGetMovieDetails, onGetMovieCredits } = this.props;
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
          movieSearch={comedies}
          movieDataError={errorComedies}
          movieSearchPending={isPendingComedies}
          onGetMovieDetails={onGetMovieDetails}
          onGetMovieCredits={onGetMovieCredits}
        />
      </Layout>
    )
  }
}


const mapStateToProps = state => {
  return {
    isPendingComedies: state.getComedies.isPendingComedies,
    comedies: state.getComedies.comedies,
    errorComedies: state.getComedies.errorComedies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetComedies: () => dispatch(getComedies()),
    onGetMovieDetails: (id) => dispatch(getMovieDetails(id)),
    onGetMovieCredits: (id) => dispatch(getMovieCredits(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comedies);
