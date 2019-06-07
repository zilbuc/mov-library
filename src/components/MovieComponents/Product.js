import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import Img from 'gatsby-image';

const Product = ({ product }) => {
  const { price, name, ingredients } = product;
  const { fixed } = product.img;

  return (
    <ProductWrapper>
      <Img fixed={fixed} alt={name} className='img' />
      <div className='title'>
        <div className='product-content'>
          <h3 className='name'>{ name }</h3>
          <h3 className='price'>${ price }</h3>
        </div>
        <p className='ingredients'>{ ingredients }</p>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;

  .img {
    border-radius: 0.5rem;
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

export default Product;
