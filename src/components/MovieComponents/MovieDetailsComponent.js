import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MovieDetailsComponent = ({ movieCredits, movieDetails }) => {

  const { title, id, poster_path, genres, original_language, release_date, budget, revenue, overview, vote_average } = movieDetails;
  const { cast, crew } = movieCredits;
  let directors = [];
  let screenplay = [];

  if (id) {
    directors = crew.filter(crewMember => crewMember.job === 'Director');
    screenplay = crew.filter(crewMember => {
      switch (crewMember.job) {
        case 'Screenplay': return true;
        case 'Writer': return true;
        case 'Novel': return true;
        default: return false;
      }
    });
  }

  return (
    <Fragment>
      {
        !id
          ? <Link to='/'>Go back</Link>
          : <MovieInfoWrapper>
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt={title} className='poster' />
              <div className='info-section'>
                <div>
                  <label>Directed by: </label>
                  {
                    directors.map((crewMember, ind) => {
                      return <span key={crewMember.id}> {crewMember.name}{ directors.length !== ind + 1 && ', ' }</span>
                      })
                  }
                </div>
                <div>
                  <label>Screenplay / Written by: </label>
                  {
                    screenplay.map((crewMember, ind) => {
                      return <span key={ind}> {crewMember.name}{ screenplay.length !== ind + 1 && ', ' }</span>
                      })
                  }
                </div>
                <div><label>Genres: </label>
                  {
                    genres.map((genre, ind) => {
                      return <span key={genre.id}> {genre.name}{ genres.length !== ind + 1 && ', '}</span>
                    })
                  }
                </div>
                <div><label>Language: </label>{original_language.toUpperCase()}</div>
                <div><label>Release date: </label>{release_date}</div>
                <div><label>Budget: </label>{budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                <div><label>Revenue: </label>{revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                <div><label>Overview: </label>{overview}</div>
                <div><label>Average vote: </label>{vote_average}</div>
              </div>
              <div className='cast-wrapper'>
                {
                  cast.filter((cast, ind) => ind <= 5).map((cast, ind) => {
                    return (
                      <div key={ind} className='cast'>
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
  max-width: 100%;
  .poster {
    width: 100%;
    max-width: 600px;
    margin: 2rem 1rem 2rem 0;
    float: left;
  }
  .info-section {
    max-width: 100%;
    margin: 2rem 0.5rem;
    font-size: 1.2rem;
    clear: both;
  }
  .info-section div {
    margin: 0.5rem 0;
  }
  label {
    font-weight: 700;
    margin: 1rem 0;
  }
  .cast-wrapper {
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 1rem;
    max-width: 100%;
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
  }
  @media (min-width: 992px) {
    .poster {
      max-width: 450px;
    }
    .info-section {
      clear: none;
    }
    .cast-wrapper {
      grid-template-columns: 1fr 1fr;
      float: left;
    }
  }
`;

export default MovieDetailsComponent;
