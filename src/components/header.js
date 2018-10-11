import React from 'react'
import { Link } from 'gatsby'
import { Avatar } from 'antd'

import 'antd/lib/avatar/style/css'
import styles from './header.module.css'

const Header = ({ siteTitle, avatarUrl }) => (
  <div className={styles.fullHeader}>
    <div className={styles.wrapper}>
      <div className={styles.mask} />
      <div className={styles.maskTwo} />
      <Avatar size={50} className={styles.avatar} src={avatarUrl} />
      <Link to="/" className={styles.text}>
        <span className={styles.title}>
          {siteTitle}
          <div className={styles.subtitle}>Desarrollo web</div>
        </span>
      </Link>
    </div>
  </div>
)

export default Header
