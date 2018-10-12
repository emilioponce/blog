import React from 'react'
import { Link } from 'gatsby'
import { Avatar } from 'antd'

import 'antd/lib/avatar/style/css'
import styles from './header.module.css'

const Header = ({ siteTitle, avatarUrl }) => (
  <div className={styles.fullHeader}>
    <div className={styles.widthWrapper}>
      <div className={styles.mask} />
      <Link to="/" className={styles.a}>
        <Avatar size={50} className={styles.avatar} src={avatarUrl} />
        <span className={styles.titleWrapper}>
          <div className={styles.title}>{siteTitle}</div>
          <div className={styles.subtitle}>Desarrollo web</div>
        </span>
      </Link>
    </div>
  </div>
)

export default Header
