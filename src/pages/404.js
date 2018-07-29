import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div
    style={{ margin: '3rem auto', maxWidth: 1024, padding: '0 10px 0 10px' }}
  >
    <Helmet title="Página no encontrada" />
    <h1>Página no encontrada</h1>
    <img src="@TODO poner imagen" />
    <h2>
      Esta ruta no existe, comprueba por favor que has escrito correctamente la
      URL.
    </h2>
    <p>
      Si el plan magistral anteriormente descrito no funciona, puedes volver a
      la <Link to={`/`}>página de inicio</Link> o contactar conmigo en{' '}
      <a href="http://www.twitter.com/soycore">Twitter</a>
    </p>
  </div>
)

export default NotFoundPage
