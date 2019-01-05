import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <div
    style={{
      border: `1px solid black`,
      margin: `0 0 100px`,
      textAlign: 'center',
    }}
  >
    <h1 style={{margin: `20px 0`}}>READ_YOUR_DOCUMENT.JS</h1>
    <ul style={{listStyleType: 'none'}}>
      <li><Link to="/">TOP</Link></li>
      <li><Link to="about">ABOUT</Link></li>
      <li>ARTICLES</li>
    </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
