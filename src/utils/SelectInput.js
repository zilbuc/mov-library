import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { styles, Section } from '../utils';

class SelectInput extends React.Component {

  handleChange = selectedValue => {
    this.props.onSelectGenre(selectedValue);
  };

  render() {
    const { selectGenre, genres } = this.props;

    const genresOptions = [{value: 0, label: '- none -'}, ...genres.map(genre => {
      return {
        value: genre.id,
        label: genre.name
      }
    })];

    return (
      <Section>
        <SelectWrapper>
          <form>
            <label>Filter search results by genre:</label>
            <Select
              value={selectGenre}
              onChange={this.handleChange}
              options={genresOptions}
            />
          </form>
        </SelectWrapper>
      </Section>
    );
  }
}

const SelectWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  form {
    margin: -50px auto;
    color: ${styles.colors.mainBlack};
  }
  div[class*='control'] {
    border-radius: 0;
    border-color: ${styles.colors.mainGrey};
    box-shadow: none;
    &:hover, &:focus {
      border-color: ${styles.colors.mainGrey};
      outline: none;
    }
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`;

export { SelectInput };
