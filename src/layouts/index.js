import React from "react";
import Link from "gatsby-link";

export default ({ children, data }) => (
  <div>
    <Link to={`/`}>
      <h3>Inicio</h3>
    </Link>
    <Link to={`/sobre-mi/`}>Sobre mí</Link>
    {children()}
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
