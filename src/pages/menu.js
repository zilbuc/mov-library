import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils';
import menuBcg from '../images/bcg/menuBcg.jpeg';
import Menu from '../components/HomePageComponents/Menu';

const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={menuBcg}>
      <Banner title='menu' subtitle={`let's dig in`}></Banner>
    </PageHeader>
    <Menu />
  </Layout>
)

export default MenuPage;
