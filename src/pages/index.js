/** @jsx jsx */
import Layout from '../components/layout'
import Image from '../components/image'
import LinkButton from '../components/linkButton'
import SEO from '../components/seo'
import { jsx, css } from '@emotion/core'

const IndexPage = () => (
  <Layout>
    <SEO title="read_your_document.JS" keywords={[`JavaScript`, `Zine`, `Magazine`]} />
    <div css={css`
      max-width: 1024px;
      margin: 0 auto;
      padding: 64px 0 144px;
    `}>
      <div css={css`
        max-width: 560px;
        margin: auto;
      `}>
        <Image />
      </div>
      <p css={css`
        margin-top: 4rem;
        font-weight: bold;
        text-align: center;
      `}>
        2019年1月発売予定
      </p>
      <div css={css`
        width: 320px;
        margin: auto;
      `}>
        <LinkButton href="hoge.com">Check it out</LinkButton>
      </div>
    </div>
  </Layout>
)

export default IndexPage
