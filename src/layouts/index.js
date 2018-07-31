import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/header'
import _ from 'lodash'

import './index.module.css'

export default ({ children, data }) => (
  <div>
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
    />
    <Header siteTitle={'Blog | '.concat(data.site.siteMetadata.title)} />
    {children()}
  </div>
)

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
