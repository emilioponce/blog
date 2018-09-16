import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Icon } from 'antd'

export default ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          margin: '2rem auto',
          maxWidth: 1024,
          padding: '0 10px 0 10px'
        }}
      >
        <div>
          <Link to={`/sobre-mi/`}>Sobre mí</Link>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            key={node.id}
            style={{
              padding: '0 0 1px 0'
            }}
          >
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <div
              style={{
                fontSize: '80%',
                color: '#9c9c9c',
                display: 'inline'
              }}
            >
              {node.frontmatter.date}
            </div>
            <div
              style={{
                fontSize: '80%',
                color: '#9c9c9c',
                display: 'inline',
                marginLeft: '10px'
              }}
            >
              <Icon
                type="eye"
                style={{
                  fontSize: '18px',
                  color: '#29BB9C',
                  marginTop: '10px'
                }}
              />
              &nbsp;
              {node.timeToRead}
              &nbsp;minutos
            </div>

            <p>{node.excerpt}</p>
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
