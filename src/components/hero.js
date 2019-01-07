/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { BREAK_POINT_SP, COLOR_BLACK } from '../utils/constants'

const heroStyle = css`
  padding: 88px 0 172px;
  @media (max-width: ${BREAK_POINT_SP}px) {
    padding: 32px 0 72px;
  }
`

const heroTitleStyle = css`
  margin: 0;
  display: inline-block;
  padding: 24px 24px 24px 32px;
  font-size: 72px;
  text-align: center;
  letter-spacing: 8px;
  color: #fff;
  background-color: #${COLOR_BLACK};
  @media (max-width: ${BREAK_POINT_SP}px) {
    padding: 24px 20px 24px 24px;
    font-size: 32px;
    letter-spacing: 4px;
  }
`

const Hero = ({ children }) => (
  <div css={heroStyle}>
    <h2 css={heroTitleStyle}>{children}</h2>
  </div>
)

export default Hero
