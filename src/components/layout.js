/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { jsx, css } from '@emotion/core'
import { BREAK_POINT_SP } from '../utils/constants'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div css={css`
          max-width: 1024px;
          margin: auto;
          padding: 72px 32px 144px;
          @media (max-width: ${BREAK_POINT_SP}px) {
            padding: 72px 16px 56px;
          }
        `}>
          {children}
        </div>
        <footer css={css`
          color: #fff;
          line-height: 48px;
          background-color: #10316b;
          text-align: center;
          font-size: 10px;
        `}>
          &copy; 2019 read_your_document.JS office
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
