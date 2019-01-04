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
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
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
        <Header />
        <div className="content">{children}</div>
      </>
    )}
  />
)
