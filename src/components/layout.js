import React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { createGlobalStyle } from 'styled-components';
import Navbar from './globals/navbar';
import Footer from './globals/Footer';

class Layout extends React.Component {

  componentDidMount() {
    // console.log('mounted');
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Navbar />
          {this.props.children}
        <Footer />
      </React.Fragment>
      //
      // <div>
      //   <Link to="/">
      //     <h3>Redux example</h3>
      //   </Link>
      //   <ConnectedCounter />
      //   <ul>
      //     <li>
      //       <Link to="/a/">a</Link>
      //     </li>
      //     <li>
      //       <Link to="/b/">b</Link>
      //     </li>
      //     <li>
      //       <Link to="/c/">c</Link>
      //     </li>
      //   </ul>
      //   {this.props.children}
      // </div>
    )
  }
}

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
