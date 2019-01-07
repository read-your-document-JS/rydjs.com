/** @jsx jsx */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import { COLOR_BLACK } from '../utils/constants'

const style = css`
  display: block;
  width: 100%;
  max-width: 320px;
  margin: auto;
  padding: 20px 0;
  border: 2px solid #${COLOR_BLACK};
  color: #${COLOR_BLACK};
  background-color: #fff;
  text-align: center;
  position: relative;
  transition: all 0.15s ease-in;
  font-size: 18px;
  &::before {
    content: '';
    float: left;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 6px;
    top: 6px;
    z-index: -1;
    border: 2px solid #${COLOR_BLACK};
    transition: all 0.15s ease-in;
  }
  &:hover {
    color: #fff;
    background-color: #${COLOR_BLACK};
    &::before {
      left: 0px;
      top: 0px;
    }
  }
`

const LinkButton = ({ children, to, href, exStyle }) => {
  if (to) {
    return (
      <Link css={css`
        ${style};
        ${exStyle};
      `} to={to}>{children}</Link>
    )
  }

  return (
    <a rel="noopener noreferrer" target="_blank" css={css`
      ${style};
      ${exStyle};
    `} href={href}>{children}</a>
  )
}

LinkButton.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
}

LinkButton.defaultProps = {
  to: ``,
  href: ``,
}

export default LinkButton
