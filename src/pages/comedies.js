import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils';
import comedyBcg from '../images/bcg/comedyBcg.jpg';
import MovieGallery from '../components/MovieComponents/MovieGallery';
import { connect } from "react-redux"
import { getComedies, getMovieDetails, getMovieCredits } from '../state/actions/actions';

class Comedies extends Component {

  componentDidMount = () => {
    document.querySelector('.search-again').setAttribute('style', 'display: none');
    if (!(this.props.comedies.length > 0)) {
      this.props.onGetComedies();
    }
  }

  render() {
    const { isPendingComedies, comedies, errorComedies, onGetMovieDetails, onGetMovieCredits } = this.props;
    return (
      <Layout { ...this.props }>
        <SEO title="Comedies" />
        <PageHeader img={comedyBcg}>
          <Banner title='most popular comedies' subtitle='in 2019'></Banner>
        </PageHeader>
        <MovieGallery
          movieData={comedies}
          movieDataError={errorComedies}
          movieDataPending={isPendingComedies}
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
