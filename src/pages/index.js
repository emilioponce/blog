import React from 'react'
import Layout from '../components/layout'
import SobreMiPreview from '../components/SobreMiPreview'
import ArticlesList from '../components/ArticlesList'
import Footer from '../components/Footer'

export default ({ data }) => (
  <Layout>
    <SobreMiPreview />
    <ArticlesList data={data} />
    <Footer />
  </Layout>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale: "es")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
