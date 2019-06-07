import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner, Section, Title } from '../utils';
import aboutBcg from '../images/bcg/aboutBcg.jpeg';
// import { QuickInfoWrapper } from '../components/HomePageComponents/QuickInfo';
import styled from 'styled-components';
import { connect } from "react-redux"
import MovieDetailsComponent from '../components/MovieComponents/MovieDetailsComponent';

class MovieDetails extends Component {

  render() {

    const { movieDetails, movieCredits, isPendingGetDetails, isPendingGetCredits } = this.props;

    return (
      <Layout { ...this.props }>
        <SEO title="Home" />
        <PageHeader img={aboutBcg}>
          <Banner title='about us' subtitle='time to face reality'></Banner>
        </PageHeader>
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
