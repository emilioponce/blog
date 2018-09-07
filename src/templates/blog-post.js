import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          margin: '3rem auto',
          maxWidth: 1024,
          padding: '0 10px 0 10px'
        }}
      >
        <Helmet title={'Blog | '.concat(data.postData.frontmatter.title)} />
        <h1>
          {data.postData.frontmatter.title}{' '}
          <div
            style={{
              fontSize: '45%',
              color: '#757575'
            }}
          >
            {data.postData.frontmatter.date}
          </div>
        </h1>
        <Img fluid={data.postImage.childImageSharp.fluid} />
        <div dangerouslySetInnerHTML={{ __html: data.postData.html }} />
      </div>
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
