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
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            key={node.id}
            style={{
              marginBottom: '20px',
              backgroundColor: 'rgb(252, 252, 252)',
              borderRadius: '8%'
            }}
          >
            <Link
              to={node.fields.slug}
              style={{
                borderBottom: 'none',
                boxShadow: 'none',
                backgroundColor: 'rgb(252, 252, 252)',
                fontWeight: 'normal'
              }}
            >
              <h2>{node.frontmatter.title}</h2>

              <span
                style={{
                  fontSize: '80%',
                  color: '#9c9c9c'
                }}
              >
                {node.frontmatter.date}
              </span>

              <Icon
                type="eye"
                style={{
                  fontSize: '15px',
                  marginLeft: '15px',
                  color: '#9c9c9c'
                }}
              />
              <span
                style={{
                  fontSize: '80%',
                  color: '#9c9c9c'
                }}
              >
                {' '}
                {node.timeToRead} {node.timeToRead <= 1 ? 'minuto' : 'minutos'}
              </span>
              <p style={{ marginBottom: '0px' }}>{node.excerpt}</p>
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
