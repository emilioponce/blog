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
        <div style={{ paddingBottom: '20px' }}>
          <Link to={`/sobre-mi/`}>Sobre mí</Link>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            key={node.id}
            style={{
              paddingBottom: '1px'
            }}
          >
            <Link
              to={node.fields.slug}
              style={{
                borderBottom: 'none',
                boxShadow: 'none',
                fontWeight: 'normal'
              }}
            >
              <h2>{node.frontmatter.title}</h2>

              <span
                style={{
                  fontSize: '80%',
                  color: '#9c9c9c',
                  textDecoration: 'none'
                }}
              >
                {node.frontmatter.date}
              </span>

              <Icon
                type="eye"
                theme="twoTone"
                twoToneColor="#29BB9C"
                style={{
                  fontSize: '20px',
                  marginLeft: '15px'
                }}
              />

              <span
                style={{
                  fontSize: '80%',
                  color: '#9c9c9c'
                }}
              >
                &nbsp;
                {node.timeToRead}
                &nbsp;
                {node.timeToRead <= 1 ? 'minuto' : 'minutos'}
              </span>
              <p style={{ marginTop: '5px' }}>{node.excerpt}</p>
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
