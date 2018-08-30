import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import graphql from 'gatsby'

export default ({ data }) => {
  return (
    <div
      style={{ margin: '3rem auto', maxWidth: 1024, padding: '0 10px 0 10px' }}
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
      <Img sizes={data.postImage.sizes} />
      <div dangerouslySetInnerHTML={{ __html: data.postData.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String) {
    postData: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "es")
      }
    }
    postImage: imageSharp(id: { regex: $slug }) {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
