import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import favicon from '../images/favicon.ico'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { regex: "/avatar_titulo/" }) {
          childImageSharp {
            resolutions(width: 250, height: 250) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={'Blog | '.concat(data.site.siteMetadata.title)}
          meta={[
            { name: 'description', content: 'Blog de Emilio Ponce' },
            {
              name: 'keywords',
              content:
                'SCRUM, Kanban, react, nodejs, gatsbyjs, jamstack, SQL, postgresql, nosql, desarrollo, agile, software, javascript, java, spring, patrones de software'
            }
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        />
        <Header
          siteTitle={data.site.siteMetadata.title}
          avatarUrl={data.file.childImageSharp.resolutions.src}
        />
        <div className="content">{children}</div>
      </>
    )}
  />
)
