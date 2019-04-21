/** @jsx jsx */
import Layout from '../components/layout'
import SEO from '../components/seo'
import LinkButton from '../components/linkButton'
import ShareBox from '../components/shareBox'
import { jsx, css } from '@emotion/core'
import { BREAK_POINT_SP, COLOR_BLACK, COLOR_BLUE } from '../utils/constants'
import { articleHash } from '../utils/articleHash'

const Article = ({ location, children }) => {
  const articleData = articleHash.find(d => d.path === location.pathname.split('/')[3])
  return (
    <Layout>
      <SEO
        title={articleData.title}
        description={articleData.description}
        keywords={[`JavaScript`, `Zine`, `Magazine`]}
      />
      <div css={css`
        padding-top: 64px;
        @media (max-width: ${BREAK_POINT_SP}px) {
          padding-top: 0;
        }
      `}>
        <article css={css`
          margin-bottom: 1.5rem;
          padding: 60px;
          background-color: #fff;
          border: 4px solid #${COLOR_BLACK};
          position: relative;
          &::after {
            content: '';
            display: block;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 80px 80px 0;
            border-color: transparent #${COLOR_BLACK} transparent transparent;
            position: absolute;
            right: 0;
            top: 0;
          }
          @media (max-width: ${BREAK_POINT_SP}px) {
            padding: 24px 16px 48px;
            font-size: 14px;
            &::after {
              border-width: 0 56px 56px 0;
            }
          }

          section p:not(:last-child) {
            margin-bottom: 1rem;
          }

          h3 {
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            position: relative;
            &::after {
              content: '';
              display: block;
              height: 4px;
              width: 24px;
              background-color: #${COLOR_BLUE};
              position: absolute;
              left: 0;
              bottom: 0;
            }
          }

          section {
            &:not(:last-child) {
              margin-bottom: 3rem;
            }
          }
        `}>
          <div css={css`
            margin-bottom: 3rem;
          `}>
            <p css={css`
              display: inline-block;
              margin: 0 0 2rem;
              padding: 0 10px 0 12px;
              line-height: 40px;
              background-color: #${COLOR_BLACK};
              color: #fff;
              letter-spacing: 2px;
            `}>
              {articleData.issue}
            </p>
            <h2 css={css`
              font-size: 48px;
              @media (max-width: ${BREAK_POINT_SP}px) {
                font-size: 24px;
              }
            `}>{articleData.title}</h2>
            <p css={css`
              margin: 0;
            `}>Text by <a css={css`
              font-weight: bold;
            `} href={articleData.authorUrl} rel="noopener noreferrer" target="_blank">{articleData.author}</a></p>
          </div>
          {children}
        </article>
        <ShareBox title={articleData.title} url={location.pathname} />
        <LinkButton to="/articles">一覧へ戻る</LinkButton>
      </div>
    </Layout>
  )
}

export default Article
