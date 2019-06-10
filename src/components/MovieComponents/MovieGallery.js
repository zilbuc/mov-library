import React from 'react';
import Movie from './Movie';
import { styles, Section } from '../../utils';
import styled from 'styled-components';

const MovieGallery = ({ movieData, movieDataError, movieSearchPending, onGetMovieDetails, onGetMovieCredits }) => {

  return (
    <Section>
      <EmptySearch className='search-again'>
        {
          movieData.length === 0 && 'Nothing found, please enter a movie and try again!'
        }
      </EmptySearch>
      <MovieList>
        {
          movieData.map(movie => {
            return <Movie key={movie.id} movie={movie} onGetMovieDetails={onGetMovieDetails} onGetMovieCredits={onGetMovieCredits}/>
          })
        }
      </MovieList>
    </Section>
  );
}

const MovieList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 768px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;

const EmptySearch = styled.div`
  font-size: 1.2rem;
  color: ${styles.colors.mainBlack};
  text-align: center;
  margin-top: -35px;
`;

export default MovieGallery;
