import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#29BB9C',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1024,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: 'white' }}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
