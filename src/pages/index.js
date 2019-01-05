import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="READ_YOUR_DOCUMENT.JS" keywords={[`JavaScript`, `Zine`, `Magazine`]} />
    <div style={{ maxWidth: `614px`, marginBottom: `1.45rem`, margin: `0 auto` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
