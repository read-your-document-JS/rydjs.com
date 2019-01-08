/** @jsx jsx */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import { BREAK_POINT_SP, COLOR_BLACK } from '../utils/constants'

const style = css`
  display: block;
  width: 320px;
  margin: auto;
  padding: 20px 0;
  border: 4px solid #${COLOR_BLACK};
  color: #${COLOR_BLACK};
  background-color: #fff;
  text-align: center;
  position: relative;
  transition: all 0.15s ease-in;
  font-size: 18px;
  font-weight: bold;
  &::before {
    content: '';
    display: block;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    position: absolute;
    left: 3px;
    top: 3px;
    z-index: -1;
    border: 4px solid #${COLOR_BLACK};
    transition: all 0.1s ease-in;
  }
  &:hover {
    color: #fff;
    background-color: #${COLOR_BLACK};
    &::before {
      left: -4px;
      top: -4px;
    }
  }
  @media (max-width: ${BREAK_POINT_SP}px) {
    width: 100%;
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
