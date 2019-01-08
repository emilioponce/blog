import React from 'react'
import { Icon } from 'antd'

import styles from './Footer.module.css'

export default () => (
  <div className={styles.footer}>
    Desarrollado con{' '}
    <Icon type="heart" theme="filled" className={styles.heart} /> y{' '}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </div>
)
