/** @jsx jsx */
import { Link } from 'gatsby'
import Hero from '../components/hero'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { jsx, css } from '@emotion/core'
import { BREAK_POINT_SP, COLOR_BLACK } from '../utils/constants'
import { articleHash } from '../utils/articleHash'

const articleStyle = css`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 4px solid #${COLOR_BLACK};
  color: #${COLOR_BLACK};
  background-color: #fff;
  position: relative;
  &::before {
    content: '';
    float: left;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 11px;
    top: 10px;
    z-index: -1;
    border: 4px solid #${COLOR_BLACK};
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
      {articleHash.map(d => (
        <Article key={d.title} title={d.title} author={d.author} issue={d.issue} to={`/article/${d.issue.split('/')[0]}${d.issue.split('/')[1]}/${d.path}`} />
      ))}
    </div>
  </Layout>
)

export default Articles
