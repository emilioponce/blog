import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import { Icon } from 'antd'
import Layout from '../components/layout'

import styles from './404.module.css'

export default ({ data }) => (
  <Layout>
    <div>
      <Helmet title="Página no encontrada" />
      <h1>404 Página no encontrada</h1>
      <div className={styles.mainImage}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <h2>
        Esta ruta no existe, por favor comprueba que has escrito correctamente
        la URL.
      </h2>
      <p>
        Si el plan magistral anteriormente descrito no funciona, puedes volver a
        la <Link to={`/`}>página de inicio</Link> o contactar conmigo en{' '}
        <Icon type="twitter" className={styles.iconTwitter} />
        <a href="http://www.twitter.com/soycore">Twitter</a>
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { regex: "/404/" }) {
      childImageSharp {
        fluid(maxWidth: 1140) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
