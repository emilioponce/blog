import React from 'react'
import { Avatar } from 'antd'
import styles from './SobreMiPreview.module.css'
import 'antd/lib/avatar/style/css'

export default () => (
  <div className={styles.wrapper}>
    <Avatar size={130} src={'avatar.png'} className={styles.avatar} />
    <div>
      <div className={styles.name}>Emilio Ponce</div>
      <div className={styles.description}>
        <p>
          Soy Ingeniero Informático, me dedico al desarrollo web y tengo
          experiencia gestionando equipos.
        </p>
        <p>
          Senior Frontend Developer @ <a href="https://www.zinio.com/">Zinio</a>
          .
        </p>
      </div>
    </div>
  </div>
)
