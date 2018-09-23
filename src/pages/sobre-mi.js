import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Icon } from 'antd'

export default ({ data }) => (
  <Layout>
    <div
      style={{ margin: '3rem auto', maxWidth: 1024, padding: '0 10px 0 10px' }}
    >
      <Helmet title="Blog | Sobre mí" />
      <h1>Sobre mí</h1>
      <div
        style={{
          padding: '20px 0 10px 0'
        }}
      >
        <Img
          resolutions={data.file.childImageSharp.resolutions}
          style={{ borderRadius: '10%' }}
          title="Dime usted"
        />
      </div>
      <div>
        <p>
          Soy Ingeniero Informático y dedico gran parte de mi tiempo a
          desarrollar aplicaciones web. También gestiono un equipo, e incluso de
          vez en cuando comienzo un <i>Pet Project</i> y no lo acabo.
        </p>
        <p>
          Siento curiosidad por el aspecto técnico y humano de las cosas. Sabrás
          algo más sobre mí en:
        </p>
        <div>
          <span
            style={{
              display: 'inline',
              float: 'left',
              margin: '0px 30px',
              textAlign: 'center'
            }}
          >
            <a
              href="https://twitter.com/soycore"
              style={{
                borderBottom: 'none',
                boxShadow: 'none',
                backgroundColor: 'white'
              }}
            >
              <Icon
                type="twitter"
                style={{
                  fontSize: '48px',
                  color: '#2CAAE1'
                }}
              />
              <div>Twitter</div>
            </a>
          </span>

          <span
            style={{
              display: 'inline',
              float: 'left',
              margin: '0px 30px',
              textAlign: 'center'
            }}
          >
            <a
              href="https://github.com/emilioponce"
              style={{
                borderBottom: 'none',
                boxShadow: 'none',
                backgroundColor: 'white'
              }}
            >
              <Icon
                type="github"
                style={{
                  fontSize: '48px'
                }}
              />
              <div>Github</div>
            </a>
          </span>

          <span
            style={{
              display: 'inline',
              float: 'left',
              margin: '0px 30px',

              textAlign: 'center'
            }}
          >
            <a
              href="https://www.linkedin.com/in/emilio-ponce-a319459/"
              style={{
                borderBottom: 'none',
                boxShadow: 'none',
                backgroundColor: 'white'
              }}
            >
              <Icon
                type="linkedin"
                theme="filled"
                style={{
                  fontSize: '48px',
                  color: '#0077B5'
                }}
              />
              <div>Linkedin</div>
            </a>
          </span>

          <span
            style={{
              display: 'inline',
              float: 'left',
              margin: '0px 30px',
              textAlign: 'center'
            }}
          >
            <a
              href="https://www.youtube.com/user/ValenceBandSongs"
              style={{
                borderBottom: 'none',
                boxShadow: 'none',
                backgroundColor: 'white'
              }}
            >
              <Icon
                type="youtube"
                theme="filled"
                style={{
                  fontSize: '48px',
                  color: '#FF0000'
                }}
              />
              <div>Youtube</div>
            </a>
          </span>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { regex: "/avatar.jpg/" }) {
      childImageSharp {
        resolutions(width: 250, height: 250) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
