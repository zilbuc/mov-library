import React from 'react';
import Product from './Product';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';

const MENU_QUERY = graphql`
  query {
    menuQuery: allContentfulMenu {
      totalCount
      edges {
        node {
          id
          name
          price
          ingredients
          img {
            fixed (width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Menu = ({}) => {
  return (
    <Section>
      <Title title='featured items' message='little taste' />
      <ProductList>
        <StaticQuery query={MENU_QUERY} render={data => {
          return data.menuQuery.edges.map(({ node }) => {
            return <Product key={node.id} product={node} />
          })
        }} />
      </ProductList>
    </Section>
  );
}

const ProductList = styled.div`
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

export default Menu;
