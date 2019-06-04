import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from 'styled-components';
import Navbar from './globals/navbar';
import Footer from './globals/Footer';
// import "./layout.css"

const Layout = ({ children }) => {
  return (
  <React.Fragment>
    <GlobalStyles />
    <Navbar />
    {children}
    <Footer />
  </React.Fragment>
  )
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
