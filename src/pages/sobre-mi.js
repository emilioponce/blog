import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Icon } from 'antd'

import styles from './sobre-mi.module.css'

export default () => (
  <Layout>
    <Helmet title="Blog | Sobre mí" />
    <div className={styles.title}>Sobre mí</div>
    <div className={styles.description}>
      <p>Hola! Me llamo Emilio y soy Ingeniero Informático.</p>{' '}
      <p>
        Dedico gran parte de mi tiempo a desarrollar aplicaciones web, y también
        tengo experiencia liderando equipos de hasta 7 desarrolladores. A veces,
        cuando nadie me ve, comienzo un <i>Pet Project</i> y no lo acabo.
      </p>
      <p>
        Me gustan los procesos creativos, y siento curiosidad por el aspecto
        técnico y humano de las cosas.
        <br /> No dudes en decirme algo, estaré encantado de hablar contigo!
      </p>
      <p>Sabrás más cosas sobre mí en:</p>
      <div>
        <span>
          <a
            href="https://twitter.com/soycore"
            className={styles.a}
            title="Mi perfil en Twitter"
          >
            <Icon type="twitter" className={styles.iconTwitter} />
          </a>
        </span>
        <span>
          <a
            href="https://github.com/emilioponce"
            className={styles.a}
            title="Date una vuelta por mi Github"
          >
            <Icon type="github" className={styles.iconGithub} />
          </a>
        </span>
        <span>
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
        <span>
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
