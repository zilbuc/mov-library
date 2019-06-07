import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import { Link } from 'gatsby';

const Movie = ({ movie, onGetMovieDetails, onGetMovieCredits }) => {
  const { id, title, release_date, vote_average, poster_path, overview } = movie;

  return (
    <MovieWrapper>
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt={title} className='img' />
      <div className='title'>
        <div className='product-content'>
          <h3 className='name'>{ title } , { release_date }</h3>
          <h3 className='price'>Average vote: { vote_average }</h3>
        </div>
        <p className='ingredients'>{ overview }</p>
        <Link
          to='/movie-details/'
          onClick={() => {
            onGetMovieDetails(id);
            onGetMovieCredits(id);
          }}
        >
          <h4>Read more</h4>
        </Link>
      </div>
    </MovieWrapper>
  );
}

const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;

  .img {
    border-radius: 0.5rem;
    width: 200px;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  .name, .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
  .info {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
    text-transform: lowercase;
  }
`;

export default Movie;
