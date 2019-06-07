import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';
import { styles } from '../../utils';

class QuickInfo extends Component {

  render() {
    return (
      <Section>
        <Title message='let us tell you' title='our mission'></Title>
        <QuickInfoWrapper>
          <p className='text'>Fashion axe photo booth four dollar toast viral, snackwave taiyaki readymade squid truffaut literally street art copper mug. Tousled wayfarers slow-carb letterpress copper mug. Selfies distillery tilde taiyaki schlitz paleo. Master cleanse food truck sartorial, four loko williamsburg kitsch asymmetrical. Try-hard single-origin coffee 3 wolf moon, slow-carb letterpress microdosing post-ironic. Fam keytar blog XOXO austin schlitz vegan +1 fingerstache. Sartorial shaman iPhone, XOXO tote bag mixtape woke vape hexagon palo santo.</p>
          <Link to='/about/' className='link'>
            <SectionButton>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    );
  }

}

export const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  .link {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`;

export default QuickInfo;
