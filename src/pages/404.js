import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'

export default ({ data }) => {
  return (
    <div
      style={{ margin: '3rem auto', maxWidth: 1024, padding: '0 10px 0 10px' }}
    >
      <Helmet title="Página no encontrada" />
      <h1>404 Página no encontrada</h1>
      <Img sizes={data.image404.sizes} />
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
  )
}

export const query = graphql`
  query image404 {
    image404: imageSharp(id: { regex: "/404/" }) {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
