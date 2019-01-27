/** @jsx jsx */
import Article from '../../../template/article'
import { jsx } from '@emotion/core'

const ArticlePage = ({ location }) => (
  <Article location={location}>
    <p>
      Jimi Hendrix が口をパクパクさせながら、Wah Pedal を踏む。俺たちは泥だらけで、少しステージに向かって傾斜した牧草地帯に寝転びながら、奇声をあげる。空は青く、明日の予定も、明後日の予定も、それから来月の予定もなかった。
    </p>
    <p>
      Jimiが死んでから 30 年になる。ウッドストックのあの興奮を忘れることができない。あの時の興奮を取り戻すかのように、JavaScript を書くことになる。
    </p>
    <p>本当にあの頃と似ている。もう親の世代がもっていた価値規範と俺たちの行動は違いすぎる。世界が変わろうとしている時、その変化の最先端は若者の中で起きていて (フロントエンドっていうのはそういうことだ)、気づくと親の世代とは (多くの人は大体20才か30才くらいしか離れていないだろう) 完全に見ている方向が違う。だからこう言われることになる。</p>
    <p>「一体それが何の役に立つんだ？今まで通りでいいじゃないか。もしかしたら失敗するかもしれないんだから。」</p>
    <p>新しいライブラリは、きっと親世代から嫌われるだろう。Jimi の演奏のように。でもカルチャーやアートっていうのはそういうもんだ。理解されるまで待っていなくていい。どんどん次に進むべきだ。</p>
    <p>Jimi の演奏も親世代から嫌われた。まずクラシックじゃないし、フォークでもない。髪型も服装も変だし、まともにギターの音も聞こえないじゃないか。Fuzz face それから Uni-Vibe に 9# b13 のサウンド。何もかもが変だった。</p>
    <p>でも、変というのは古い世代からの視点に過ぎない。</p>
    <p>ウッドストックの単なる牧場地帯に、フォードのファルコンにのって集まった俺たちは (本当はマスタングでいきたかったけれど親父が許してくれなかった。俺が工学部に行かなかったことをまだ根に持っているんだ。)、何が起きるかなんてわからなかったけれど、同じ目的を共有していた。だからあんなに人が集まったんだ。</p>
    <p>I’m goin’ way down south, way down where I can be free!</p>
    <p>ウッドストックの興奮と、フロントエンドの潮流がなぜ似ているのかは自分にもわからない。しかしそれでもわかっているのは、時代の流れというのは、その中にいる時には気づかないってことだ。もし冷静に自分の置かれている状況がわかるなら、それは本当の興奮とは言えない。</p>
    <p>Where you going with that gun in your hand?</p>
    <p>その時代の、一番文句を言われる楽器を持った方がいいと思う。彼の時代にはギターだったし、もしくはギターをそういうものにしたのは彼かもしれない。</p>
    <p>だから俺も JavaScript を演奏することにした。誰にも思いつかない方法で。</p>
    <p><b>{'{JavaScript: "をかき鳴らせ"}'}</b></p>
  </Article>
)

export default ArticlePage