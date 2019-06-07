import React from 'react';
import styled from 'styled-components';
import { styles, Section, SectionButton } from '../utils';

const SearchBar = ({ searchFieldChange, searchFieldSubmit }) => {
  return (
    <Section>
      <form onSubmit={searchFieldSubmit} >
        <SearchField
          className='pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search movies'
          onChange={searchFieldChange}
        />
        <SectionButton type='submit'>
          Find movies
        </SectionButton>
      </form>
    </Section>
  );
}

const SearchField = styled.input`
  display: flex;
  margin: 0 auto;
  width: 90%;
  font-size: 1.2rem;
  padding: 3px 6px 1px;
  color: ${styles.colors.mainBlack};
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`;

export { SearchBar };
