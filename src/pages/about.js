/** @jsx jsx */
import Layout from '../components/layout'
import SEO from '../components/seo'
import { jsx, css } from '@emotion/core'
import { BREAK_POINT_SP, COLOR_BLACK } from '../utils/constants'
import PageTransition from 'gatsby-plugin-page-transitions';

const containerStyle = css`
  max-width: 1024px;
  margin: auto;
  padding: 0 32px 96px;
  font-size: 14px;
  @media (max-width: ${BREAK_POINT_SP}px) {
    padding: 0 16px 48px;
  }
`

const heroStyle = css`
  padding: 88px 0 172px;
  @media (max-width: ${BREAK_POINT_SP}px) {
    padding: 32px 0 72px;
  }
`

const heroTitleStyle = css`
  margin: 0;
  display: inline-block;
  padding: 32px;
  font-size: 72px;
  text-align: center;
  letter-spacing: 8px;
  color: #fff;
  background-color: #${COLOR_BLACK};
  @media (max-width: ${BREAK_POINT_SP}px) {
    width: 100%;
    padding: 24px;
    font-size: 32px;
    letter-spacing: 4px;
  }
`

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
      margin-bottom: 32px;
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
    margin-bottom: 2rem;
    font-size: 24px;
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

const memberNameStyle = css`
  font-weight: bold;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="read_your_document.JS"
      keywords={[`JavaScript`, `Zine`, `Magazine`]}
    />
    <PageTransition>
      <div css={containerStyle}>
        <div css={heroStyle}>
          <h2 css={heroTitleStyle}>ABOUT</h2>
        </div>
        <article css={articleStyle}>
          <h3 css={articleTitleStyle}>MAGAZINE</h3>
          <h4 css={rydStyle}>read_your_document.JS</h4>
          <p>隔月出版のJavaScript専門同人雑誌。BOOTHにて好評発売中。</p>
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
    </PageTransition>
  </Layout>
)

export default IndexPage
