import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Icon } from 'antd'

import styles from './index.module.css'

export default ({ data }) => {
  return (
    <Layout>
      <div className={styles.mainLinksContainer}>
        <Link to={`/sobre-mi/`}>Sobre mí</Link>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className={styles.postContainer} key={node.id}>
          <Link to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>
            <div className={styles.metaInfo}>
              <span className={styles.date}>{node.frontmatter.date}</span>
              <Icon type="eye" className={styles.icon} />
              <span className={styles.timeToRead}>
                {' '}
                {node.timeToRead} {node.timeToRead <= 1 ? 'minuto' : 'minutos'}
              </span>
            </div>
            <p className={styles.excerpt}>{node.excerpt}</p>
          </Link>
        </div>
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
