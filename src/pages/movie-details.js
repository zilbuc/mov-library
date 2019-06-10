import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { styles, PageHeader, Banner, Section } from '../utils';
import movieDetailsBcg from '../images/bcg/movieDetailsBcg.jpg';
import styled from 'styled-components';
import { connect } from "react-redux"
import MovieDetailsComponent from '../components/MovieComponents/MovieDetailsComponent';

class MovieDetails extends Component {

  render() {

    const { movieDetails, isPendingGetDetails, isPendingGetCredits } = this.props;

    return (
      <Layout { ...this.props }>
        <SEO title="Home" />
        <PageHeader img={movieDetailsBcg}>
          <Banner title={movieDetails.title} subtitle={movieDetails.tagline}></Banner>
        </PageHeader>
        <Section>
          <MovieDetailsWrapper>
            {
              !isPendingGetCredits && !isPendingGetDetails && <MovieDetailsComponent { ...this.props }/>
            }
          </MovieDetailsWrapper>
        </Section>
      </Layout>
    )
  }
}

const MovieDetailsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 90vw;
  .img {
    border-radius: 0.5rem;
    max-width: 300px;
  }
  .description {
    max-height: 300px;
  }
  .name {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
    font-size: 1.35rem;
  }
  .vote {
    font-size: 1.1rem;
  }
  .overview {
    max-height: 150px;
    overflow: hidden;
  }
  @media (min-width: 480px) {
    .img {
      width: 200px;
    }
  }
  @media (min-width: 992px) {
    max-width: 80vw;
  }
`;

const mapStateToProps = state => {
  return {
    isPendingGetDetails: state.getMovieDetails.isPendingGetDetails,
    movieDetails: state.getMovieDetails.movieDetails,
    errorDetails: state.getMovieDetails.errorDetails,
    isPendingGetCredits: state.getMovieCredits.isPendingGetCredits,
    movieCredits: state.getMovieCredits.movieCredits,
    errorCredits: state.getMovieCredits.errorCredits
  }
}

export default connect(mapStateToProps)(MovieDetails);
