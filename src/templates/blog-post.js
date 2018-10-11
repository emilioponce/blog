import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Icon } from 'antd'

import styles from './blog-post.module.css'

export default ({ data }) => {
  let shareTwitterUrl = `https://twitter.com/intent/tweet?text=Blog de Emilio Ponce - ${
    data.postData.frontmatter.title
  } https://emilioponce.info${data.postData.fields.slug}`

  return (
    <Layout>
      <Helmet title={'Blog | '.concat(data.postData.frontmatter.title)} />
      <h1>{data.postData.frontmatter.title} </h1>
      <div className={styles.caption}>
        {data.postData.frontmatter.date}
        <Icon
          type="eye"
          theme="twoTone"
          twoToneColor="#29BB9C"
          className={styles.icon}
        />{' '}
        {data.postData.timeToRead}{' '}
        {data.postData.timeToRead <= 1 ? 'minuto' : 'minutos'}
        <a
          href={shareTwitterUrl}
          title="Comparte en twitter!"
          className={styles.a}
        >
          <Icon type="twitter" className={styles.iconTwitter} />
        </a>
      </div>
      <div className={styles.postImage}>
        <Img fluid={data.postImage.childImageSharp.fluid} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.postData.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String, $mainImage: String) {
    postData: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "es")
      }
      fields {
        slug
      }
      timeToRead
    }
    postImage: file(relativePath: { eq: $mainImage }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
