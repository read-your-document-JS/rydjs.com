/** @jsx jsx */
import TwitterLogo from './twitterLogo'
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'
import { BREAK_POINT_SP, COLOR_BLACK, COLOR_YELLOW } from '../utils/constants'
import config from '../../gatsby-config'

const ShareBox = ({ title, url }) => {
  const shareText = `${title} - read_your_document.JS ${config.siteMetadata.siteUrl}${url} #rydjs`
  const encodedShareText = encodeURIComponent(shareText)
  return (
    <div css={css`
      display: flex;
      width: 320px;
      justify-content: center;
      align-items: center;
      margin: 0 auto 3rem;
      padding: 24px;
      background-color: #fff;
      border: 4px solid #${COLOR_BLACK};
      @media (max-width: ${BREAK_POINT_SP}px) {
        width: 100%;
      }
    `}>
      Share on:
      <a
        title="twitter share button"
        rel="noopener noreferrer"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${encodedShareText}`}
        css={css`
          display: block;
          width: 24px;
          margin-left: 1rem;
          line-height: 0;
          background-color: #${COLOR_BLACK};
          transition: all 0.1s ease-in;
          &:hover {
            background-color: #${COLOR_YELLOW};
          }
        `}
        >
        <TwitterLogo />
      </a>
    </div>
  )
}

ShareBox.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

ShareBox.defaultProps = {
  title: ``,
  url: ``,
}

export default ShareBox
