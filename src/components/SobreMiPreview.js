import React from 'react'
import { Avatar, Icon } from 'antd'
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
          experiencia gestionando equipos. Senior Frontend Developer @{' '}
          <a href="https://www.zinio.com/">Zinio</a>.
        </p>
        <a href="https://twitter.com/soycore" className={styles.a}>
          <Icon type="twitter" className={styles.icon} />
        </a>
        <a href="https://github.com/emilioponce" className={styles.a}>
          <Icon type="github" className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/emilio-ponce-a319459/"
          className={styles.a}
        >
          <Icon type="linkedin" theme="filled" className={styles.icon} />
        </a>
        <a
          href="https://www.youtube.com/user/ValenceBandSongs"
          className={styles.a}
        >
          <Icon type="youtube" theme="filled" className={styles.icon} />
        </a>
      </div>
    </div>
  </div>
)
