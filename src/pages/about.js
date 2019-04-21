/** @jsx jsx */
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import { jsx, css } from '@emotion/core'
import { BREAK_POINT_SP, COLOR_BLACK } from '../utils/constants'

const rydStyle = css`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
  @media (max-width: ${BREAK_POINT_SP}px) {
    font-size: 20px;
  }
`

const articleStyle = css`
  padding: 60px;
  background-color: #fff;
  border: 4px solid #${COLOR_BLACK};
  &:not(:last-child) {
    margin-bottom: 64px;
  }
  @media (max-width: ${BREAK_POINT_SP}px) {
    padding: 24px;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
    p {
      font-size: 14px;
      margin-bottom: 1rem;
    }
  }
`

const articleTitleStyle = css`
  font-size: 48px;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  position: relative;
  &::after {
    content: '';
    display: block;
    height: 8px;
    width: 56px;
    background-color: #0b409c;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  @media (max-width: ${BREAK_POINT_SP}px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    font-size: 24px;
    &::after {
      height: 4px;
      width: 24px;
    }
  }
`

const sectionStyle = css`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`

const sectionTitleStyle = css`
  font-size: 20px;
`

const listStyle = css`
  list-style: none;
`

const backnumberStyle = css`
  display: grid;
  align-self: center;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(144px, 240px));
  list-style: none;

  @media (max-width: ${BREAK_POINT_SP}px) {
    display: block;
  }
`

const backnumberItemStyle = css`
  margin: 0;
`

const memberNameStyle = css`
  font-weight: bold;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="ABOUT"
      keywords={[`JavaScript`, `Zine`, `Magazine`]}
    />
    <div>
      <Hero>ABOUT</Hero>
      <article css={articleStyle}>
        <h3 css={articleTitleStyle}>MAGAZINE</h3>
        <h4 css={rydStyle}>read_your_document.JS</h4>
        <p>隔月出版のJavaScript専門同人雑誌。
          <a rel="noopener noreferrer" target="_blank" href="https://inutetraplus.booth.pm/items/1199029">
            BOOTH
          </a>にて好評発売中。
        </p>
        <p>「詩を読む前に、もっとドキュメントを読んだ方がいいと思うぜ。」</p>
      </article>
      <article css={articleStyle}>
        <h3 css={articleTitleStyle}>VISION</h3>
        <section css={sectionStyle}>
          <h4 css={sectionTitleStyle}>1. Knowledge exchange</h4>
          <p>
            ここ数年で JavaScript が利用される場面は増えてきました。例えば React や Vue.js、Angular のようなアプリケーション構築、Node.js でのサーバーサイド実装、WebGL などによるアニメーションなどがあります。その一方で、特定のライブラリやフレームワークの議論に終始してしまう場面が多くなったり、JavaScript を書いている人達の中でも属しているカテゴリによって持っている知識が全然違ってしまったりということが多くなってきたなと感じます。
          </p>
          <p>
            そこで私たちは JavaScript という言語に焦点をあて、JavaScript 界隈の知識をこの雑誌に集積することでカテゴリの違う知識を JavaScript 界隈全体に循環させ、交流や議論を活発にしていけたらいいなと考えています。
          </p>
        </section>
        <section css={sectionStyle}>
          <h4 css={sectionTitleStyle}>2. Ascension</h4>
          <p>
            人間とそれ以外の生物を分ける最後の一要素は、有機化学上のグラフではなくて、自己への執着ではないか。執着は仏教においてはそのまま煩悩そのものであり、キリスト教においては原罪が示すものの一つだといえる。ありとあらゆる文化圏において、我々の苦しみの起源は自分自身であることが語られる。シッダルタは菩提樹の下で坐禅を組んでいた時、イエスは十字架を背負い丘を登る時、罪深き自身について考えていたに違いない。
          </p>
          <p>
            しかし、この “原罪” という存在は、あまりに人間の面白さそのものでありすぎている。人間から罪を奪ったら、取るに足らない比較的猿に似た動物の一派でしかない。自己への執着に突き動かされ、勉強会に出てみたり、OSS の活動をしていることは否めないし、あなたもそうかもしれない。それを否定するつもりはない。むしろ先ほど繰り返したように、人間の面白さは罪に由来する、と私は考えている。
          </p>
          <p>
            そうであれば、目指すべきは自己の喪失ではなく、その帰結としての成果物の向上だ。勉強会が成果物として価値が低いとはいうつもりはない。結局のところ価値判断というのは、人それぞれが行うことであって、苟も他者が介入するものではない。とりわけ個人的な判断基準で、一回性の、再現性のない、公演というのは、一般的にいって、情報を固定化を避ける、もしくは既存の情報の固定化に対して反旗をひるがえすパフォーマンスであって（ジョン・ケージの偶然性の音楽を見よ）、情報工学に属する職業エンジニアの規範とは様子が異なると考えることは十分に可能だ。
          </p>
          <p>
            そういうわけで、皆さんにも、紙という古典的で機能性の著しく劣る媒体に、思う存分ルサンチマンを (ルサンチマンと書くものは未だその中にいいる) ぶつけて欲しい。特に JavaScript に関するポエムを重点的に募集しております。ふるってご連絡ください。
          </p>
        </section>
      </article>
      <article css={articleStyle}>
        <h3 css={articleTitleStyle}>BACK NUMBER</h3>
        <ul css={backnumberStyle}>
          {data.backnumbersJson.items.map(b => (
            <li css={backnumberItemStyle} key={b.boothId}>
              <a rel="noopener noreferrer" target="_blank" href={`https://inutetraplus.booth.pm/items/${b.boothId}`}>
                <figure css={css`
                  margin-bottom: 0.5rem;
                `}>
                  <Img fluid={b.image.childImageSharp.fluid} alt={`vol.${b.number}表紙`}/>
                </figure>
                <h4 css={css`
                  margin: 0;
                `}>
                  rydjs vol.{b.number}<br/>
                  {b.theme}
                </h4>
              </a>
            </li>
          ))}
        </ul>
      </article>
      <article css={articleStyle}>
        <h3 css={articleTitleStyle}>MEMBER</h3>
        <ul>
          <li css={listStyle}>
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/takanoripe">
              <p css={memberNameStyle}>takanorip</p>
            </a>
          </li>
          <li css={listStyle}>
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/better_than_i_w">
              <p css={memberNameStyle}>１日一つ強くなる中西</p>
            </a>
          </li>
        </ul>
        <p>
          read_your_document.JSではJavaScriptに関する記事を書いてくれる人を募集しています。
          毎月じゃなくても書きたいときにだけ書いていただければ大丈夫です。<br/>
          興味のあるTwitterのDMで<a href="https://twitter.com/takanoripe">@takanoripe</a>までご連絡ください。
        </p>
      </article>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    backnumbersJson {
      items {
        number
        theme
        boothId
        image {
          childImageSharp {
            fluid(maxWidth: 750, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
