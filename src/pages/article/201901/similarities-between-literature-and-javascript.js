/** @jsx jsx */
import Article from '../../../template/article'
import { jsx, css } from '@emotion/core'

const code = `const babelWordIndex = words => {
  return Math.floor(Math.random() * words.length);
};

const babelWord = words => {
  const selectedIndex = babelWordIndex(words);
  return words[selectedIndex];
};

const babelLine = words => {
  const wordsArray = Array.from({ length: 80 });
  return wordsArray.reduce(accumulator => {
    const selectedWord = babelWord(words);
    return accumulator + selectedWord;
  }, "");
};

const babelPage = words => {
  const lineArray = Array.from({ length: 40 });
  return lineArray.map(() => babelLine(words));
};

const babelBook = words => {
  const pageArray = Array.from({ length: 410 });
  return pageArray.map(() => babelPage(words));
};

const babelBookMinter = ({ words }) => {
  return babelBook(words);
};

export default babelBookMinter;`

const ArticlePage = ({ location }) => (
  <Article location={location}>
    <div>
      <p css={css`
        text-align: right;
      `}>
        הליל ארק ךשחלו םוי רואל םיהלא ארקיו<br />
        :דחא םוי רקב-יהיו ברע-יהיו<br />
        רשא םימה ןיב לדביו עיקרה-תא םיהלא שעיו<br />
        עיקרל לעמ רשא םימה ןיבו עיקרל תחתמ<br />
        :ןכ-יהיו<br />
        םוקמ-לא םימשה תחתמ םימה ווקי םיהלא רמאיו<br />
        :ןכ-יהיו השביה הארתו<br />
      </p>
      <p>descendit autem Dominus ut videret civitatem et turrem quam aedificabant filii Adam venite igitur descendamus et confundamus ibi linguam eorum ut non audiat unusquisque vocem proximi sui et idcirco vocatum est nomen eius Babel quia ibi confusum est labium universae terrae et inde dispersit eos Dominus super faciem cunctarum regionum</p>
      <p>
        And the LORD came down to see the city and the tower, which the children of men builded. Go to, let us go down, and there confound their language, that they may not understand one another's speech. Therefore is the name of it called Babel.
      </p>
      <p>
        エホバくだりて、かの人々の建つる街と塔を見たまえり。 いざ我らくだり、かしこにて彼らの言葉を乱し、互いに言葉を通ずることを得ざらしめん。 ゆえにその名は、バベルと呼ばる。<br />
        -- 旧約聖書より引用
      </p>
      <p>
        我々 JavaSavascript に身をやつす者共は、常に言語の分断と向かい合っている。ES201X と ES201X の狭間で、StageX と StageX の狭間で、そして Chrome と Safari と IE と Edge の狭間を右往左往しながら（Firefox のごとき少数民族についてここで言及しないこととする）、日々 <code>yarn add @babel/plugin-xxx-xxx</code> などとコマンドラインに打ち込んで、言語と言語の継ぎ目を丁寧に埋め、最初から一枚岩のようであったかのような、花崗岩の台座のごとく平坦なエディターに向い、日の入りから日没までの間、各々自分のために選んだ上等の飾り椅子の上で（あるものは大鷲の刺繍がされており、あるものは紅玉をあしらっている。特に後者は Rubyist と呼ばれることが多いようだ）、あるものは胡座を組みあるものは背筋を延ばし、一心不乱に、それ以外のことを全て忘れたかのように、文字を打ち込み続ける。編集画面上で繰り広げられる部族の踊りは徐々に熱気を帯び、薔薇の香油の匂いが意識へと沈殿し、Yagé（読：ヤーヘイ）の苦味はもはや感じられない。刻はちょうど道玄坂の反対側へ流れ、淳久堂書店の裏側から彼の影が販売された。太陽の影がユニットバスと壁の間の風に、犬がそれを教える。ギンズバークには最近あった？彼の洗濯機に？そう。それならよかったわね。でもどうして？！なぜこうしなかった！突如として警笛が私の耳をつんざく。不快だ。なんてこった。何が起きたっていうんだ。全ては順調だった。全ては望む通りだった。それで？何がおきた？祭りは終わり？Webpack のエラー？Webpack のエラー！Pipeline operator はサポートしてないだって？サポートしてないだってよ！Babel は 6 だ！もう終わりだ！なぜ 7 にしない！ああ、もう終わりだ！
      </p>
      <p>
        言語の分断は、旧約聖書の創世記の神話的事実に基づけば、神の御坐す世界にも届かんとする塔の建築を、傲慢にも企てた人類への戒めとして、神がもたらしたものだという。その神様の機嫌をそこねた塔は、古の時代のバビロニアにあって、バベルの塔という名をつけられている。（みなさんもきっと歴史の教科書でみたことがあるはずだ。ルネサンス期の画家、ブリューゲルのバベルの塔を。私の中学校の資料集では、ダンテの神曲と一緒に並べられていた）Babel は、この言語的分断の現場である塔の名前に由来し「混乱」を意味する。
      </p>
      <p>
        さて、我々フロントエンジニアは、神たる、そして母なる大地であるブラウザを傲慢にも超えて機能の拡張を推し進めた結果、歴史は繰り返され、Babel と Babel Plugin を使うことになった。混乱の再登場だ！！（文句ばっか言ってないで、Babel の設定を覚えよ。それから Webpack も。）
      </p>
      <p>
        我々職業エンジニアと Babel に関する話はこれくらいにして、文学の話に進もう。南米の幻想文学を代表するボルヘスを紹介したい。彼は確実に JavaScript を書く人間のために書かれていて（この再帰的幻惑こそがボルヘス的である。PHP = PHP: Hypertext Preprocessor!!）、彼の短編、バベルの図書は (邦題: 伝奇集に含まれる) は正規表現 (Regular Expression) そのものだ。
      </p>
      <p>
        バベルの図書館には、アルファベット 22 文字とコンマ、ピリオド、それからスペースの組み合わせで書かれた本が無数に収蔵されている。一冊の本は 410 頁からなり、1 頁は 80 行からなり、1行は 80 字からなる。その考えられる全ての組み合わせで、バベルの図書館は埋め尽くされている。
      </p>
      <p>
        聡明な読者の皆さんは気づかれたことだと思うが、もちろんこの雑誌、<code>read_your_document.JS</code> も、このバベルの図書館に収蔵されていると言うことができる。バベルの図書館の収蔵書が、文字通り「アルファベット 22 文字とコンマ、ピリオド、それからスペース」で書かれていると捉えるのではなく、この文字セットが、文字の基本単位の比喩であると捉えれば、文字の組み合わせの拡張は十分に許容される。この拡張を日本語と、少しのアルファベットにまで適用すれば、あなたの今読んでいる <code>read_your_document.JS</code> もが、この図書館に収蔵されていた。初めからされていたのだ。それを、私がもう一度今書いているのだ。（最低でも）この本が書かれたのは二度目なのだ。
      </p>
      <p>
        ボルヘスが如何に JavaScript 的かということが十分に伝わったと思うので、説明はこれくらいにして、職業エンジニアらしく、このボルヘスのバベルの図書館を JavaScript で実装することにした。ソースコードは以下のようになる。リンクからその結果を見ることもできる。
      </p>
      <p>
        <a href="https://98y43mpqyw.codesandbox.io/">アプリケーションへのリンク</a><br />
        <a href="https://codesandbox.io/s/98y43mpqyw">ソースコード</a>
      </p>
      <pre>{code}</pre>
      <p>
        一つ言い忘れたが、このコードは BabelBookMinter.js そのものによって書かれたものである。同時に、これを書いた BabelBookMinter.js もが BabelBookMinter.js それ自身によって書かれることだろう。（この暗喩が示す通り、次回もボルヘスの、同じく伝奇集に収められた「円環の廃墟」を取り上げる。）
      </p>
      <p>
        JavaScript は無限であり周期的である。どの方向でもよい、永遠の旅人がそこを横切ったとすると、彼は数世紀後に、同じ JavaScript のソースコードが同じ無秩序さで繰り返し現れることを確認するだろう（くり返されれば、無秩序も秩序に、「秩序」そのものになるはずだ。）この粋な希望のおかげで、私の孤独も華やぐのである。
      </p>
      <p>
        <a href="https://placesjournal.org/article/fairy-tale-architecture-the-library-of-babel/?cn-reloaded=1">
          https://placesjournal.org/article/fairy-tale-architecture-the-library-of-babel/?cn-reloaded=1
        </a><br />
        <a href="http://libraryofbabel.info/book.cgi?7-w2-s4-v20:1">
          http://libraryofbabel.info/book.cgi?7-w2-s4-v20:1
        </a><br />
        <a href="https://jacket2.org/commentary/digital-library-babel">
          https://jacket2.org/commentary/digital-library-babel
        </a>
      </p>
    </div>
  </Article>
)

export default ArticlePage
