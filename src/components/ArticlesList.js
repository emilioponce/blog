import React from 'react'
import ArticlePreview from './ArticlePreview'

import styles from './ArticlesList.module.css'

export default ({ data }) => {
  return (
    <>
      <div className={styles.title}>Blog</div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ArticlePreview
          key={node.id}
          link={node.fields.slug}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          timeToRead={node.timeToRead}
          excerpt={node.excerpt}
        />
      ))}
    </>
  )
}
