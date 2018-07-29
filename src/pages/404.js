import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div style={{ margin: '3rem auto', maxWidth: 1024 }}>
    <Helmet title="Página no encontrada" />
    <h1>Página no encontrada</h1>
    <img src="@TODO poner imagen" />
    <p>
      Esta ruta no existe. Puedes volver a la{' '}
      <Link to={`/`}>página de inicio</Link>
      o contactar conmigo en{' '}
      <a href="http://www.twitter.com/soycore">Twitter</a>
    </p>
  </div>
)

export default NotFoundPage
