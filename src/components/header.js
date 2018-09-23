import React from 'react'
import { Link } from 'gatsby'
import { Avatar } from 'antd'
import 'antd/lib/avatar/style/css'

import styles from './header.module.css'

const Header = ({ siteTitle, avatarUrl }) => (
  <div
    style={{
      background: '#29BB9C',
      height: '80px',
      boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)'
    }}
  >
    <div className={styles.wrapper}>
      <div className={styles.mask} />
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
