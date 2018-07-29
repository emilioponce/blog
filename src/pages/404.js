import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

 const NotFoundPage = () => (
  <div>
    <h1>No encontrado</h1>
    <p>Esta ruta no existe, mala suerte.</p>
  <div style={{ margin: '3rem auto', maxWidth: 1024 }}>
    <Helmet title="Página no encontrada" />
    <h1>Página no encontrada</h1>
    <p>
      Esta ruta no existe. Puedes volver a la{' '}
      <Link to={`/`}>página de inicio</Link>
      o contactar conmigo en{' '}
      <a href="http://www.twitter.com/soycore">Twitter</a>
    </p>
  </div>
)
