/** @jsx jsx */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Logo from './logo'
import { BREAK_POINT_SP, COLOR_BLACK } from '../utils/constants'
import { jsx, css } from '@emotion/core'

const listStyle = css`
  margin: 0 0 0 1.5rem;
`

const linkStyle = css`
  display: block;
  margin: 0;
  line-height: 72px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: #${COLOR_BLACK};
  transition: all 0.3s;
  &:hover {
    color:
  }
`

const Header = () => (
  <header css={css`
    display: flex;
    align-items: center;
    height: 72px;
    padding: 0 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    @media (max-width: ${BREAK_POINT_SP}px) {
      padding: 0 1rem;
    }
  `}>
    <h1 css={css`
      margin: 0;
      width: 56px;
      line-height: 0;
      @media (max-width: ${BREAK_POINT_SP}px) {
        width: 48px;
      }
    `}>
      <Link to="/"><Logo /></Link>
    </h1>
    <ul css={css`
      display: flex;
      align-items: center;
      margin: 0 0 0 auto;
      list-style: none;
    `}>
      <li css={listStyle}><Link css={linkStyle} to="about">ABOUT</Link></li>
      <li css={listStyle}><Link css={linkStyle} to="articles">ARTICLES</Link></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
