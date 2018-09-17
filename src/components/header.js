import React from 'react'
import { Link } from 'gatsby'
import { Avatar } from 'antd'
import 'antd/lib/avatar/style/css'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#29BB9C'
    }}
  >
    <div
      style={{
        padding: '10px 10px 0px 10px'
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          borderBottom: 'none',
          boxShadow: 'none'
        }}
      >
        <Avatar
          size={48}
          style={{
            backgroundColor: '#87d068',
            display: 'inline-block',
            marginBottom: '10px',
            marginRight: '10px'
          }}
          icon="user"
        />
        <span
          style={{
            fontSize: '40px',
            position: 'absolute',
            marginTop: '12px'
          }}
        >
          {siteTitle}
        </span>
      </Link>
    </div>
  </div>
)

export default Header
