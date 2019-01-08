/** @jsx jsx */
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import LinkButton from '../../../components/linkButton'
import TwitterLogo from '../../../components/twitterLogo'
import ShareBox from '../../../components/shareBox'
import { jsx, css } from '@emotion/core'
import { BREAK_POINT_SP, COLOR_BLACK, COLOR_BLUE, COLOR_YELLOW } from '../../../utils/constants'
import { articleHash } from '../../../utils/articleHash'

const ArticlePage = ({ location }) => {
  const articleData = articleHash.find(d => d.path === location.pathname.split('/')[3])

  return (
    <Layout>
      <SEO
        title={articleData.title}
        description="僕のJavaScriptフレームワークに対する所感を書いてみる。あくまで僕の個人的な考えなので、話半分に読んでもらえればと思う。"
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
          font-size: 14px;
          padding: 60px;
          background-color: #fff;
          border: 4px solid #${COLOR_BLACK};
          @media (max-width: ${BREAK_POINT_SP}px) {
            padding: 24px 16px 48px;
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
              line-height: 1.2;
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
          <section>
            <h3>Preamble</h3>
            <p>僕のJavaScriptフレームワークに対する所感を書いてみる。あくまで僕の個人的な考えなので、話半分に読んでもらえればと思う。</p>
          </section>
          <section>
            <h3>Vue.js</h3>
            <p>今日本で一番勢いのある JavaScript フレームワーク。Vue.js の良いところは、コミュニティが大きくしっかりしている、エコシステムがよくできていてライブラリが充実している、 HTML/CSS が従来と同じように書ける、の3つかなと思う。特に HTML や CSS が同じ様に書ける点は大きくて、マークアップと JavaScript でロジックを書く人をうまく分離したい場面ではとても嬉しい。ルーティングや状態管理といったよく使われるライブラリが公式に開発されているのも嬉しい。バージョン3.0では実装が Typescript で書き直されたりランタイムが改良がされたりするらしいので、今後も勢いは衰えなさそう。</p>
          </section>
          <section>
            <h3>React</h3>
            <p>
              Reactは純粋にJavaScriptでUIを作ることを目的としたライブラリだ。柔軟性があってTypescriptとの相性も良いのでとても広く使われている。その柔軟性ゆえに考えることが多く初心者にとっては少し扱いにくい部分があるが、使いこなせるようになれば強い。ディレクトリ構成や使用するライブラリの組み合わせに「これ！」というものがなく、サンプルコードの書き方が自分のプロジェクトと違っていて参考にしにくい、ということがしばしばある。良くも悪くもシンプルである。<br/>
              そういう部分も含めて僕はReact好きだけど、Hooksが登場して大きく開発スタイルが変わっていきそう。今後どう変わっていくのかが怖くもあり楽しみでもある。
            </p>
          </section>
          <section>
            <h3>Angular</h3>
            <p>Angularは使ったことがないのでよくわからない。ごめんなさい。ivyの話をよく聞く。</p>
          </section>
          <section>
            <h3>Web Components</h3>
            <p>
              Web ComponentsはJavaScriptフレームワークではないけど、一緒に話される事が多いので少し触れとこうかなと思う。ブラウザ実装が進んでプロダクションで使えそうなところまでは来てるけど、素のWeb Componentsはまだ扱いにくい部分が多い。特にテンプレートやイベントリスナーのあたりに課題を感じる。Template Instantiationが実装されたらそのへんが少し改善されそう。<br/>
              Template Instantiation について気になる人は<a href="https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Template-Instantiation.md">このドキュメント</a>を読むと良いと思う。
            </p>
            <p>
              Web Componentsをそのまま扱うのは難しいのでLitElementを使うのが今のところの最適解かなという気がしている。LitElementは前身のPolymerよりも薄く扱いやすくなっているし、Typescriptとの相性も良くなっている。近日v1.0がリリースされるようなので、そうすると一気にWeb Componentsの波が来そう。
            </p>
          </section>
          <section>
            <h3>Miscellaneous impressions</h3>
            <p>
              どのフレームワークも解決したいことは同じでできることもそんなに変わらないので、好きなものを選んで書いたら良いと思う。インターネットに転がってる意見は話半分で考えるのが吉。<br/>
              Web Componentsが実用段階に入りつつあるので、各フレームワークがWeb Componentsとどういう関係性を築いていくのかが個人的には気になっている。
            </p>
          </section>
        </article>
        <ShareBox title={articleData.title} url={location.pathname} />
        <LinkButton to="/articles">一覧へ戻る</LinkButton>
      </div>
    </Layout>
  )
}

export default ArticlePage
