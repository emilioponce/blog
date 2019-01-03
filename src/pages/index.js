import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import PostPreview from '../components/PostPreview'

import styles from './index.module.css'

export default ({ data }) => {
  return (
    <Layout>
      <div className={styles.mainLinksContainer}>
        <Link to={`/sobre-mi/`}>Sobre mí</Link>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostPreview
          key={node.id}
          link={node.fields.slug}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          timeToRead={node.timeToRead}
          excerpt={node.excerpt}
        />
      ))}
    </Layout>
  )
}

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
