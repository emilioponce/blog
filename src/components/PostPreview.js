import React from 'react'
import { Link } from 'gatsby'
import { Icon } from 'antd'

import styles from './PostPreview.module.css'

const PostPreview = ({ link, title, date, timeToRead, excerpt }) => (
  <div className={styles.postContainer}>
    <Link to={link}>
      <h2>{title}</h2>
      <div className={styles.metaInfo}>
        <span className={styles.date}>{date}</span>
        <Icon type="eye" className={styles.icon} />
        <span className={styles.timeToRead}>
          {' '}
          {timeToRead} {timeToRead <= 1 ? 'minuto' : 'minutos'}
        </span>
      </div>
      <p className={styles.excerpt}>{excerpt}</p>
    </Link>
  </div>
)

export default PostPreview
