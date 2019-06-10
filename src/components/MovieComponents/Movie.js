import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import { Link } from 'gatsby';

const Movie = ({ movie, onGetMovieDetails, onGetMovieCredits }) => {
  const { id, title, release_date, vote_average, poster_path, overview } = movie;

  return (
    <MovieWrapper>
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt={title} className='img' />
      <div className='description'>
        <h3 className='name'>{ title }, { release_date }</h3>
        <h3 className='vote'>Average vote: { vote_average }</h3>
        <p className='overview'>{ overview }</p>
        <Link
          to='/movie-details/'
          onClick={() => {
            onGetMovieDetails(id);
            onGetMovieCredits(id);
          }}
        >
          <h4>...Read more</h4>
        </Link>
      </div>
    </MovieWrapper>
  );
}

const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
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
    grid-template-columns: auto 1fr;
    .img {
      width: 200px;
    }
  }
`;

export default Movie;
