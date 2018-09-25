import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Icon } from 'antd'

import styles from './index.module.css'

export default ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          margin: '3rem auto',
          maxWidth: 1024,
          padding: '0 10px 0 10px'
        }}
      >
        <div className={styles.mainLinksContainer}>
          <Link to={`/sobre-mi/`}>Sobre mí</Link>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className={styles.postContainer} key={node.id}>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
              <span className={styles.date}>{node.frontmatter.date}</span>
              <Icon type="eye" className={styles.icon} />
              <span className={styles.timeToRead}>
                {' '}
                {node.timeToRead} {node.timeToRead <= 1 ? 'minuto' : 'minutos'}
              </span>
              <p className={styles.excerpt}>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
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
