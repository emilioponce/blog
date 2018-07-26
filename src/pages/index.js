import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  return (
    <div style={{ margin: '3rem auto', maxWidth: 1024 }}>
      <div style={{ marginBottom: '40px' }}>
        <Link to={`/sobre-mi/`}>Sobre mí</Link>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}
              {'  '}
              <div
                style={{
                  fontSize: '60%',
                  color: '#757575'
                }}
              >
                {node.frontmatter.date}
              </div>
            </h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
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
        }
      }
    }
  }
`
