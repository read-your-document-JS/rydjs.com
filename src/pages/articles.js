/** @jsx jsx */
import { Link } from 'gatsby'
import Hero from '../components/hero'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { jsx, css } from '@emotion/core'
import { BREAK_POINT_SP, COLOR_BLACK } from '../utils/constants'

const articleStyle = css`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 2px solid #${COLOR_BLACK};
  color: #${COLOR_BLACK};
  background-color: #fff;
  position: relative;
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
    color: #${COLOR_BLACK};
    &::before {
      left: 0px;
      top: 0px;
    }
  }
`

const titleStyle = css`
  margin-bottom: auto;
`

const authorStyle = css`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`

const containerStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 28px;
`

const Article = ({ title, author, issue, to }) => (
  <Link to={to} css={articleStyle}>
    <h3 css={titleStyle}>{title}</h3>
    <p css={authorStyle}>{author}</p>
    <p>{issue}</p>
  </Link>
)

const Articles = () => (
  <Layout>
    <SEO title="ARTICLES" />
    <Hero>ARTICLES</Hero>
    <div css={containerStyle}>
      <Article title="Title" author="takanorip" issue="2019/01" to="/article/201901/sample" />
      <Article title="TitleTitleTitleTitleTitleTitleTitle" author="１日一つ強くなる中西" issue="2019/01" to="/article/201901/sample" />
      <Article title="Title" author="takanorip" issue="2019/01" to="/article/201901/sample" />
      <Article title="Title" author="takanorip" issue="2019/01" to="/article/201901/sample" />
      <Article title="Title" author="takanorip" issue="2019/01" to="/article/201901/sample" />
    </div>
  </Layout>
)

export default Articles
