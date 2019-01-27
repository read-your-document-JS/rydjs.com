/** @jsx jsx */
import Layout from '../components/layout'
import Image from '../components/image'
import LinkButton from '../components/linkButton'
import SEO from '../components/seo'
import { jsx, css } from '@emotion/core'
import { BREAK_POINT_SP, COLOR_BLACK } from '../utils/constants'

const IndexPage = () => (
  <Layout>
    <SEO title="TOP" keywords={[`JavaScript`, `Zine`, `Magazine`]} />
    <div css={css`
      padding-top: 64px;
      @media (max-width: ${BREAK_POINT_SP}px) {
        padding-top: 32px;
      }
    `}>
      <div css={css`
        max-width: 560px;
        margin: auto;
        border: 4px solid #${COLOR_BLACK};
      `}>
        <Image />
      </div>
      <p css={css`
        margin-top: 4rem;
        font-weight: bold;
        text-align: center;
      `}>
        好評販売中
      </p>
      <LinkButton
        exStyle={css`
          margin-top: 2rem;
        `}
        href="https://inutetraplus.booth.pm/items/1199029"
      >
        Check it out
      </LinkButton>
    </div>
  </Layout>
)

export default IndexPage
