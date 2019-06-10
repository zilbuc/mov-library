import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { styles, PageHeader, Banner, Section, Title } from '../utils';
import aboutBcg from '../images/bcg/aboutBcg.jpeg';
import styled from 'styled-components';
import { connect } from "react-redux"
import MovieDetailsComponent from '../components/MovieComponents/MovieDetailsComponent';

class MovieDetails extends Component {

  render() {

    const { movieDetails, movieCredits, isPendingGetDetails, isPendingGetCredits } = this.props;

    return (
      <Layout { ...this.props }>
        <SEO title="Home" />
        {/* <PageHeader img={aboutBcg}>
          <Banner title='about us' subtitle='time to face reality'></Banner>
        </PageHeader> */}
        <Section>
          <Title title={movieDetails.title} message={movieDetails.tagline} />
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
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  max-width: 90vh;
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
    grid-template-columns: auto 1fr;
    .img {
      width: 200px;
    }
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
