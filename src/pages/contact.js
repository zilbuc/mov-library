import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner, Section, Title } from '../utils';
import contactBcg from '../images/bcg/contactBcg.jpeg';
import { QuickInfoWrapper } from '../components/HomePageComponents/QuickInfo';
import thumbIcon from '../images/thumb_icon.png';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const ICON = graphql`
  query {
    iconQuery: file(relativePath: {eq: "thumb_icon.png"}) {
      childImageSharp {
        fluid (maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
  <PageHeader img={contactBcg}>
    <Banner title='contact us' subtitle={`let's get in touch`}></Banner>
  </PageHeader>
  <Section>
    <Title message='like us on' title='twinstagram'></Title>
    <QuickInfoWrapper>
      <StaticQuery query={ICON} render={data => <Img fluid={data.iconQuery.childImageSharp.fluid} alt='thumbIcon' style={{ maxWidth: '400px'}}/> } />
    </QuickInfoWrapper>
  </Section>

  </Layout>
)

export default ContactPage
