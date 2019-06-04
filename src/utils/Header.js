import React from 'react';
import styled from 'styled-components';
import homeBcg from '../images/bcg/homeBcg.jpeg';

const HomeHeader = ({ img, children }) => {
  return (
    <IndexHeader img={img}>
      { children }
    </IndexHeader>
  );
}

const PageHeader = ({ img, children }) => {
  return (
    <DefaultHeader img={img}>
      { children }
    </DefaultHeader>
  );
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 100px);
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`;

HomeHeader.defaultProps = {
  img: homeBcg
}
DefaultHeader.defaultProps = {
  img: homeBcg
}

export { HomeHeader, PageHeader };
