import React from 'react'
import { Link } from 'gatsby'
//@TODO revisar qué pasa con esta linea de antd (si se elimina todos los estilos mal, no solo de avatar)
import 'antd/lib/avatar/style/css'
import styles from './header.module.css'

export default () => (
  <div className={styles.fullHeader}>
    <div className={styles.widthWrapper}>
      <div className={styles.menu}>
        <Link to={`/`} className={styles.a}>
          Inicio
        </Link>
        <Link to={`/sobre-mi/`} className={styles.a}>
          Sobre mí
        </Link>
      </div>
    </div>
  </div>
)
