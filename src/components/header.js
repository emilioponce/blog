import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#29BB9C'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1024,
        padding: '10px 0px 10px 10px'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            borderBottom: 'none',
            boxShadow: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
