import React, { Fragment } from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import { Link } from 'gatsby';

const MovieDetailsComponent = (props) => {

  const { movieCredits, movieDetails } = props;
  const { title, id, poster_path, genres, original_language, release_date, tagline, budget, revenue, overview, vote_average } = movieDetails;
  const { cast, crew } = movieCredits;

  return (
    <Fragment>
      {
        !id
          ? <Link to='/'>Go back</Link>
          : <MovieInfoWrapper>
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt={title} className='poster' />
              <div className='info-section'>
                <div>
                  Directed by:
                  {
                    crew.filter(crew => crew.job === 'Director').map(crew => {
                      return <h5 key={crew.id}>{crew.name}</h5>
                      })
                  }
                </div>
                <div>
                  Screenplay by:
                  {
                    crew.filter(crew => crew.job === 'Screenplay').map(crew => {
                      return <h5 key={crew.id}>{crew.name}</h5>
                      })
                  }
                </div>
                <div>Genres: </div>
                  {
                    genres.map(genre => {
                      return <span > {genre.name},</span>
                    })
                  }
                <div>Language: {original_language}</div>
                <div>Release date: {release_date}</div>
                <div>Budget: ${budget}</div>
                <div>Revenue: ${revenue}</div>
                <div>Overview: {overview}</div>
                <div>Average vote: {vote_average}</div>
              </div>
              <div className='cast-wrapper'>
                {
                  cast.filter((cast, ind) => ind <= 5).map((cast, ind) => {
                    return (
                      <div className='cast'>
                        {/* { ind === 0 && <h3 className='main-cast'>Main cast:</h3> } */}
                        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${cast.profile_path}`} alt={cast.name} className='cast-photo' />
                        <div className='cast-name'><strong>{cast.name}</strong> plays {cast.character}</div>
                      </div>
                    )
                  })
                }
              </div>
            </MovieInfoWrapper>
      }
    </Fragment>
  );
}

const MovieInfoWrapper = styled.div`
  max-width: 90vh;
  .poster {
    width: 100%;
    max-width: 600px;
    margin: 2rem 1rem 2rem 0;
    float: left;
  }
  .info-section {
    max-width: 90vh;
    margin: 2rem 0.5rem;
  }
  .cast-wrapper {
    float: left;
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 1rem;
    max-width: 90vh;
  }
  .cast-photo {
    border-radius: 0.5rem;
    max-width: 75px;
    float: left;
    margin : 0.75rem 1rem;
  }
  .cast-name {
    font-size: 1.2rem;
    margin: 25px 0;
    ${'' /* display: inline-block; */}
  }
  ${'' /* .name {
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
  } */}
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .cast-wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
  ${'' /* @media (min-width: 992px) {
    grid-template-areas:
      'one one two'
      'one one three';
    .poster {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  } */}
`;

export default MovieDetailsComponent;
