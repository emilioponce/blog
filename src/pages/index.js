import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  return (
    <div>
      <h1>
        Emilio Ponce
      </h1>
      <h2>Mantenlo simple</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}{" "} — {node.frontmatter.date}</h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

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
`;
