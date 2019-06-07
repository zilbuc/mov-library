import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import { Link } from 'gatsby';

const MovieDetailsComponent = (props) => {

  const { movieCredits, movieDetails } = props;
  const { title, id, poster_path, genres, original_language, release_date, tagline, budget, revenue, overview, vote_average } = movieDetails;
  const { cast, crew } = movieCredits;

  return (
    <MovieWrapper>
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt={title} className='img' />
      <h3>
        Directed by:
        {
          crew.filter(crew => crew.job === 'Director').map(crew => {
            return <h5>{crew.name}</h5>
            })
        }
      </h3>
      <h3>
        Screenplay by:
        {
          crew.filter(crew => crew.job === 'Screenplay').map(crew => {
            return <h5>{crew.name}</h5>
            })
        }
      </h3>
      <h3>Genres: </h3>
        {
          genres.map(genre => {
            return <span> {genre.name},</span>
          })
        }
      <h3>{original_language}</h3>
      <h3>{release_date}</h3>
      <h3>Budget: ${budget}</h3>
      <h3>Revenue: ${revenue}</h3>
      <h3>Overview: {overview}</h3>
      <h3>Average vote: {vote_average}</h3>
      <h3>Main cast:</h3>
      <div>
        {
          cast.filter((cast, ind) => ind <= 5).map(cast => {
            return (
              <React.Fragment>
                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${cast.profile_path}`} alt={cast.name} className='img' />
                <h4>{cast.name}: </h4>
                <span>{cast.character}</span>
              </React.Fragment>
            )
          })
        }
      </div>
      {/*
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
      </div> */}
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

export default MovieDetailsComponent;
