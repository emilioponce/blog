import React from 'react'
import { Link } from 'gatsby'
import { Avatar } from 'antd'
import 'antd/lib/avatar/style/css'

const Header = ({ siteTitle, avatarUrl }) => (
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
        padding: '10px 10px 0 10px'
      }}
    >
      <Avatar
        size={50}
        style={{
          backgroundColor: '#1b846d',
          display: 'inline-block',
          marginBottom: '10px',
          marginRight: '10px'
        }}
        src={avatarUrl}
      />

      <Link
        to="/"
        style={{
          color: 'white'
        }}
      >
        <span
          style={{
            fontSize: '35px',
            position: 'absolute',
            marginTop: '3px'
          }}
        >
          {siteTitle}

          <div style={{ fontSize: '18px', marginLeft: '1px' }}>
            Desarrollo web
          </div>
        </span>
      </Link>
    </div>
  </div>
)

export default Header
