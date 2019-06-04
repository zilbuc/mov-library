import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { styles } from '../../../utils';

class NavbarLinks extends Component {

  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home'
      },
      {
        id: 1,
        path: '/about/',
        name: 'about'
      },
      {
        id: 2,
        path: '/menu/',
        name: 'menu'
      },
      {
        id: 3,
        path: '/contact/',
        name: 'contact'
      }
    ]
  };

  render() {
    return (
      <LinksWrapper open={this.props.navbarOpen}>
        {
          this.state.links.map(item => {
            return (
              <li key={item.id}><Link to={item.path} className='nav-link'>{item.name}</Link></li>
            )
          })
        }
      </LinksWrapper>
    );
  }

}

const LinksWrapper = styled.ul`
  height: ${props => (props.open ? '152px' : '0px')};
  overflow: hidden;
  ${styles.transObject({})};
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding-left: 1.3rem;
    }
  }
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding-left: 1rem;
    }
  }
`;

export default NavbarLinks;
