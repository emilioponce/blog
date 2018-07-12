import React from "react";

export default ({ data }) => (
  <div>
    <h1>Sobre mí</h1>
    <p>Soy Ingeniero Informático y he dedicado mucho tiempo a desarrollar aplicaciones web. 
      También gestiono un equipo, y no lo comentes por ahí pero de vez en cuando comienzo un Pet Project y no lo acabo.</p>
    <p>Siento curiosidad por el aspecto técnico y humano de las cosas, sabrás algo más de mí en:</p>
    <p><a href="https://twitter.com/soycore">Twitter</a></p>
    <p><a href="https://github.com/emilioponce">Github</a></p>
    <p><a href="https://www.linkedin.com/in/emilio-ponce-a319459/">Linkedin</a></p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
