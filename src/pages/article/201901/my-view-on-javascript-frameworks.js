/** @jsx jsx */
import Article from '../../../template/article'
import { jsx, css } from '@emotion/core'

const ArticlePage = ({ location }) => (
  <Article location={location}>
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
  </Article>
)

export default ArticlePage
