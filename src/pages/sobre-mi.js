import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <div
      style={{ margin: '3rem auto', maxWidth: 1024, padding: '0 10px 0 10px' }}
    >
      <Helmet title="Blog | Sobre mí" />
      <h1>Sobre mí</h1>
      <div
        style={{
          padding: '20px 0 10px 0'
        }}
      >
        <Img
          resolutions={data.file.childImageSharp.resolutions}
          style={{ borderRadius: '50%' }}
          title="Dime usted"
        />
      </div>
      <div>
        <p>
          Soy Ingeniero Informático y dedico gran parte de mi tiempo a
          desarrollar aplicaciones web. También gestiono un equipo, e incluso de
          vez en cuando comienzo un <i>Pet Project</i> y no lo acabo.
        </p>
        <p>
          Siento curiosidad por el aspecto técnico y humano de las cosas. Sabrás
          algo más sobre mí en:
        </p>
        <ul>
          <li>
            <a href="https://twitter.com/soycore">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/emilioponce">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/emilio-ponce-a319459/">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/ValenceBandSongs">Youtube</a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { regex: "/avatar/" }) {
      childImageSharp {
        resolutions(width: 250, height: 250) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
