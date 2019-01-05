/** @jsx jsx */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from './logo'
import { BREAK_POINT_SP } from '../utils/constants'
import { jsx, css } from '@emotion/core'

const listStyle = css`
  margin: 0 0 0 1rem;
`

const linkStyle = css`
  margin: 0;
  line-height: 72px;
  text-decoration: none;
`

const Header = () => (
  <div
    css={css`
      display: flex;
      align-items: center;
      padding: 0 2rem;
      height: 72px;
      border-bottom: 1px solid rgb(245, 243, 247);
      @media (max-width: ${BREAK_POINT_SP}px) {
        padding: 0 1rem;
      }
    `}
  >
    <h1 css={css`
      margin: 0;
      width: 56px;
      line-height: 0;
    `}>
      <Logo />
    </h1>
    <ul css={css`
      display: flex;
      align-items: center;
      margin: 0 0 0 auto;
      list-style: none;
    `}>
      <li css={listStyle}><Link css={linkStyle} to="/">TOP</Link></li>
      <li css={listStyle}><Link css={linkStyle} to="about">ABOUT</Link></li>
      <li css={listStyle}>ARTICLES</li>
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
