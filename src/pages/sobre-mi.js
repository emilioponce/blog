import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Icon } from 'antd'

import styles from './sobre-mi.module.css'

export default ({ data }) => (
  <Layout>
    <Helmet title="Blog | Sobre mí" />
    <h1>Sobre mí</h1>
    <div className={styles.profileImage}>
      <Img
        resolutions={data.file.childImageSharp.resolutions}
        title="Dime usted"
      />
    </div>
    <div>
      <p>
        Soy Ingeniero Informático y dedico gran parte de mi tiempo a desarrollar
        aplicaciones web. También tengo experiencia gestionando equipos, e
        incluso de vez en cuando comienzo un <i>Pet Project</i> y no lo acabo.
      </p>
      <p>
        Siento curiosidad por el aspecto técnico y humano de las cosas. Sabrás
        algo más sobre mí en:
      </p>
      <div>
        <span className={styles.icon}>
          <a
            href="https://twitter.com/soycore"
            className={styles.a}
            title="Mi perfil en Twitter"
          >
            <Icon type="twitter" className={styles.iconTwitter} />
          </a>
        </span>

        <span className={styles.icon}>
          <a
            href="https://github.com/emilioponce"
            className={styles.a}
            title="Date una vuelta por mi Github"
          >
            <Icon type="github" className={styles.iconGithub} />
          </a>
        </span>

        <span className={styles.icon}>
          <a
            href="https://www.linkedin.com/in/emilio-ponce-a319459/"
            className={styles.a}
            title="Visita mi Linkedin"
          >
            <Icon
              type="linkedin"
              theme="filled"
              className={styles.iconLinkedin}
            />
          </a>
        </span>

        <span className={styles.icon}>
          <a
            href="https://www.youtube.com/user/ValenceBandSongs"
            className={styles.a}
            title="Fui baterista de Valence, puedes verme en youtube."
          >
            <Icon
              type="youtube"
              theme="filled"
              className={styles.iconYoutube}
            />
          </a>
        </span>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { regex: "/avatar.jpg/" }) {
      childImageSharp {
        resolutions(width: 250, height: 250) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
