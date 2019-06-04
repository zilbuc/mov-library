import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { styles, Section } from '../../utils';


const SINGLE_IMAGE = graphql`
  query {
    image1Query: file(relativePath: {eq: "homeGallery/img-1.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 2500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2Query: file(relativePath: {eq: "homeGallery/img-2.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 2500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3Query: file(relativePath: {eq: "homeGallery/img-3.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 2500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Gallery = ({}) => {
  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        return (
          <Section>
            <GalleryWrapper>
              <div className='item item-1' >
                <Img fluid={data.image1Query.childImageSharp.fluid} alt='image' />
                <p className='info' >Awesome Pizza</p>
              </div>
              <div className='item item-2' >
                <Img fluid={data.image2Query.childImageSharp.fluid} alt='image' />
                <p className='info' >Awesome Pork</p>
              </div>
              <div className='item item-3' >
                <Img fluid={data.image3Query.childImageSharp.fluid} alt='image' />
                <p className='info' >Awesome Steak</p>
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  );
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      'one one two'
      'one one three';
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`;

export default Gallery;
