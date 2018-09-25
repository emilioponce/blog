import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Icon } from 'antd'

export default ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          margin: '2rem auto',
          maxWidth: 1024,
          padding: '0 10px 0 10px'
        }}
      >
        <Helmet title={'Blog | '.concat(data.postData.frontmatter.title)} />
        <h1>{data.postData.frontmatter.title} </h1>
        <div
          style={{
            color: '#9c9c9c'
          }}
        >
          {data.postData.frontmatter.date}
          <Icon
            type="eye"
            theme="twoTone"
            twoToneColor="#29BB9C"
            style={{
              fontSize: '18px',
              marginLeft: '10px'
            }}
          />
          <span
            style={{
              color: '#9c9c9c'
            }}
          >
            {' '}
            {data.postData.timeToRead}{' '}
            {data.postData.timeToRead <= 1 ? 'minuto' : 'minutos'}
          </span>
          <span
            style={{
              color: '#9c9c9c'
            }}
          >
            <a
              href={
                'https://twitter.com/intent/tweet?text=' +
                'Blog de Emilio Ponce - ' +
                data.postData.frontmatter.title +
                ' ' +
                'https://emilioponce.info' +
                data.postData.fields.slug
              }
              style={{
                borderBottom: 'none',
                boxShadow: 'none',
                backgroundColor: 'white'
              }}
            >
              <Icon
                type="twitter"
                style={{
                  marginLeft: '10px',
                  fontSize: '20px',
                  color: '#2CAAE1'
                }}
              />
            </a>
          </span>
        </div>

        <div style={{ padding: '10px 0 30px 0' }}>
          <Img fluid={data.postImage.childImageSharp.fluid} />
        </div>
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
