/** @jsx jsx */
import Article from '../../../template/article'
import { jsx, css } from '@emotion/core'

const ArticlePage = ({ location }) => (
  <Article location={location}>
    <section>
      <p>Wilson, Jim. Node.js 8 the Right Way:Practical, Server-Side JavaScript That Scales (Kindle Locations 117-121). Pragmatic Bookshelf. Kindle Edition. </p>
      <p>
        近年、二つの大きな変化が、ソフトウェアを書く実践の領域において起きた。Node.js はそのどちらおいても、最前線にいる。<br/>
        In recent years, two big shifts have happened in the practice of writing software — and Node.js has been at the forefront of both.
      </p>
      <p>
        大きな変化の一つは、ソフトウェアがどんどん *非同期* になっていることだ。ビッグデータ処理の仕事についているにせよ、エンドユーザーを扱う仕事をしているにせよ、ドローンの制御の仕事をしているにせよ、呼び出しに対して応答する API を作る仕事についているにせよ、非同期プログラミングの技術が必要になっているといっていいだろう。<br/>
        First, software is becoming increasingly *asynchronous*. Whether you’re waiting on a Big Data job, interacting with end users, steering a quadcopter, or simply responding to an API call, chances are you’ll need asynchronous programming techniques.
      </p>
      <p>
        第二の変化は、JavaScript がこの世界の標準コード実行環境になったことだ。JavaScript はどこでも動く。ブラウザの中でも、モダン NoSQL データベースの中でも、DIY のロボット、それから今やサーバーサイドでも実行できる。<br/>
        Second, JavaScript has quietly become the world’s standard code-execution environment. It’s everywhere: in web browsers, modern NoSQL databases, DIY robots, and now on the server as well.
      </p>
      <p>
        Node.js はこれらの流れにおいて、不可欠な存在だ。そしてさらに大きく羽ばたこうとしている。<br/>
        Node.js is an integral part of these trends, and it has taken off in a big way.
      </p>
      <h3>JavaScript 帝国の逆襲</h3>
      <p>
        この書籍は JavaScript の一番クレイジーな部分、つまり Node.js に焦点を当てた本で、ファイルシステムにまつわる処理をさせるところから始めて、ソケット通信等基本的なプロトコルに慣れていって、最終的には RESTful なウェブサービスを作る。Facebook や Twitter  といった SNS で承認をして、MongoDB へ read/write する。基本的なウェブアプリケーションは一旦作れるようになる How to 本だ。<br/>
        しかしこの本は単なるチュートリアル情報に止まることなく、野心的で、Node.js は、つまり JavaScript は、ウェブだけに限定される存在ではないということを何度も強調する。<br/>
        上の図を見て欲しい。プログラミングという大海に隆起した部分がある。I/O-bound プログラムの島だ。JavaScript が活躍「できる」と一般的に思われている “WEB” は、この島のさらに限定的な範囲でしかない。でも JavaScript は、Node.js はそんな狭い範囲に限定されない。ほとんど全ての領域で JavaScript は動く。(下の図を参照)　<br/>
        動くなら、動かしたほうがいい。 特に本誌を手に取ってくれているような熱狂的な JavaScript ギークならばそう思うはずだ。熱望しているはずだ。ブラウザという我々には狭すぎる ”故郷” を捨て、山を越え、新たな大地を目指そう。
      </p>
    </section>
  </Article>
)

export default ArticlePage
