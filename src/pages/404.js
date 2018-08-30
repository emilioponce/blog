import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <div
      style={{ margin: '3rem auto', maxWidth: 1024, padding: '0 10px 0 10px' }}
    >
      <Helmet title="Página no encontrada" />
      <h1>404 Página no encontrada</h1>
      <Img fluid={data.file.childImageSharp.fluid} />
      <h2>
        Esta ruta no existe, por favor comprueba que has escrito correctamente
        la URL.
      </h2>
      <p>
        Si el plan magistral anteriormente descrito no funciona, puedes volver a
        la <Link to={`/`}>página de inicio</Link> o contactar conmigo en{' '}
        <a href="http://www.twitter.com/soycore">Twitter</a>.
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { regex: "/404/" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
