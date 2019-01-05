/** @jsx jsx */
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { jsx, css } from '@emotion/core'

const IndexPage = () => (
  <Layout>
    <SEO title="read_your_document.JS" keywords={[`JavaScript`, `Zine`, `Magazine`]} />
    <div css={css`
      max-width: 1024px;
      margin: 0 auto;
      padding: 64px 0;
    `}>
      <div css={css`
        max-width: 560px;
        margin: auto;
      `}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
