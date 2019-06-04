import React from "react"
import { Link } from "gatsby"
import { HomeHeader, Banner, BannerButton } from '../utils';
import homeBcg from '../images/bcg/homeBcg.jpeg';

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuickInfo from '../components/HomePageComponents/QuickInfo';
import Gallery from '../components/HomePageComponents/Gallery2';
import Menu from '../components/HomePageComponents/Menu';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={homeBcg}>
      <Banner title='face reality eatery' subtitle='420 main road - Tijuana, Mexico'>
        <BannerButton style={{ margin: '2rem auto'}}><Link to='/menu/' >menu</Link></BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage;
