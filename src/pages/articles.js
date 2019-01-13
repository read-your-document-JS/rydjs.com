/** @jsx jsx */
import { Link } from 'gatsby'
import Hero from '../components/hero'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { jsx, css } from '@emotion/core'
import { COLOR_BLACK } from '../utils/constants'
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
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 40px 28px 40px 0;
    border-color: transparent #${COLOR_BLACK} transparent transparent;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &:hover {
    color: #${COLOR_BLACK};
    &::before {
      left: -4px;
      top: -4px;
    }
  }
`

const titleStyle = css`
  margin-bottom: auto;
  line-height: 1.5;
  font-size: 24px;
`

const authorStyle = css`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`

const containerStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 48px;
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
