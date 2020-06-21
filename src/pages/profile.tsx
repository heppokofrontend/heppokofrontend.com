import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StrPageTitle from "../components/str-pagetitle"

const Page = ({ data, location }: {
    data: any
    location: any
}) => {
    const siteTitle = data.site.siteMetadata.title
    const title = `著者について`;
    const subTitle = location.pathname.replace(/\//g, ``);
    const profileData = {
        HN: `.Hiroya🍣🍵`,
        HNの由来: `お寿司とお茶はﾏｼﾞさいつよまる✨\nドットはなんか、ふいんき？的な？`,
        性別: ``,
        誕生日: ``,
        星座: ``,
        血液型: ``,
        前世: ``,
        住んでいるところ: `東京都`,
        生まれたところ: `関西🐙`,
        職業: `ﾎﾑﾍﾟ作る人🛠`,
        学年: ``,
        絡むーちょ: `フロントエンドの人繋がろ〜〜！`,
        似ている芸能人: `似てないのに羽生結弦くんに似てるって言われる😐`,
        身長: ``,
        体重: ``,
        足のサイズ: ``,
        手の長さ: ``,
        趣味: `カメラ、お絵かき、Web制作`,
        特技: ``,
        握力: `よわよわ`,
        髪型: ``,
        口癖: `あじゃぱ〜`,
        性格: ``,
        ﾀﾊﾞｺ: `喫煙者バイバイ🚭`,
        自慢なこと: `とくにない…`,
        持っている資格: ``,
        使っている携帯電話: ``,
        好きな男性のタイプ: ``,
        好きな女性のタイプ: `ﾋﾐﾂ❤️`,
        好きな言葉: `元気に楽しく自信と情熱を持って`,
        好きな芸能人: ``,
        好きな食べ物: `寿司🍣！ラーメン🍜！サラダ🥗！`,
        嫌いな食べ物: ``,
        好きな飲み物: `コーラ、紅茶、日本酒🍶（なお、お酒は苦手）`,
        嫌いな飲み物: ``,
        好きな教科: ``,
        嫌いな教科: ``,
        好きなテレビ番組: ``,
        好きな映画: ``,
        好きな本: ``,
        好きなスポーツ: ``,
        好きな音楽: ``,
        好きなブランド: ``,
        愛用の香水: ``,
        好きな花: ``,
        好きなゲーム: `あんまりやらないけど、パズルとかは好き。あとメタルギアシリーズ。`,
        愛車: `免許持ってません✋`,
        将来の夢: `小学校の卒業アルバムにはWebサイトを作る人って書いていました🤧`,
        好きな動物: `あんまり得意じゃないけれど、猫はかわいいと思う。`,
        休日の過ごし方: `寝てるか、コード書いてるか、写真撮ってるか、絵を描いてるか、寝てるか。`,
        尊敬する人: `いままで出会ったすごい人たちみんなすごい🙈`,
        今一番欲しいもの: `お金`,
        今一番行きたいところ: ``,
        今一番やりたいこと: ``,
        よく使う路線: ``,
        よく遊ぶところ: `新宿、八王子`,
        カラオケでよく歌う曲: ``,
        初めて買ったCD: (<a href="https://www.amazon.co.jp/dp/B000J3FF3A/ref=cm_sw_r_tw_dp_U_x_M517EbNQ21GD2">機動戦士ガンダムSEED~SEED DESTINY BEST「THE BRIDGE」Across the Songs from GUNDAM SEED&SEED DESTINY</a>),
        マイブーム: ``,
        最近ひそかに興味があること: ``,
        生まれ変わったら: ``,
        世界平和に必要なのは: ``,
        兎に角主張したい事: `要素をタグ呼びするな😠\nWebサイトをホームページいうな😠\n自分を信じない奴なんかに、努力する価値はない!!!`,
        疑問に思っている事: ``,
        ここだけの話: ``
    };

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={`${title} - ${subTitle}`} />
            <StrPageTitle title={title} subTitle={subTitle} />
            <div className="str-outer">
                <div className="str-inner">
                    <h2 className="mod-hdg-l2">
                        <span className="mod-hdg-l2__inner">お疲れ様です。<span className="break-region">.Hiroya🍣🍵です。</span></span>
                    </h2>

                    <div className="mod-txt">
                        <p>Webサイト制作が好きで、なんやかんや都内でフロントエンドエンジニアをしています。</p>
                        <p>普段はネイティブのJavaScriptを書いています。TypeScriptは絶賛修行中です🤧</p>
                    </div>

                    <div className="mod-txt">
                        <p>小学生の時、ちょうど個人サイト制作が流行していて、その流れでフロントエンドにズブズブと…🙈🙈🙈</p>
                        <p>Web制作の他にも、カメラやお絵かきが好きです。カードゲームとかもやります。遊戯王だけ。<a href="https://yugioh-wiki.net/index.php?%A5%DE%A5%B9%A5%BF%A1%BC%A5%EB%A1%BC%A5%EB%A3%B2">マスタールール2</a>で止まってますけども。</p>
                    </div>

                    <div className="mod-txt">
                        <p>日々、まったりゆったり楽しくWebサイト制作を学んでおりますので、Web好き・フロントエンド好きなみなさんはぜひ仲良くしてください〜〜笑</p>
                    </div>

                    <div className="mod-txt">
                        <p>以上、よろしくお願いいたします。</p>
                    </div>

                    <h2 className="mod-hdg-l2">
                        <span className="mod-hdg-l2__inner">全○プロフィール</span>
                    </h2>

                    <div className="mod-txt">
                        <p>世の中が黒歴史を晒している中、陰キャの私は波に乗らずにHTMLを書いていたので、改めてやってみたマン🙈</p>
                    </div>

                    <div className="mod-list-profile">
                        <dl className="mod-list-profile__list">
                            {Object.entries(profileData).map(([title, value]) => {
                                return value ? (
                                    <div
                                        className="mod-list-profile__row"
                                        key={title}
                                    >
                                        <dt className="mod-list-profile__title">
                                            {title}
                                        </dt>

                                        <dd className="mod-list-profile__data">
                                            {value}
                                        </dd>
                                    </div>
                                ) : null
                            })}
                            <div className="mod-list-profile__row">
                                <dt className="mod-list-profile__title">
                                    ﾘｱﾙﾀｲﾑﾌﾞﾛｸﾞ
                                </dt>

                                <dd className="mod-list-profile__data align-right">
                                    <a href="https://twitter.com/heppokoFrontend">Twitter: @heppokoFrontend</a>
                                </dd>
                            </div>
                            <div className="mod-list-profile__row">
                                <dt className="mod-list-profile__title">
                                    ｱﾙﾊﾞﾑ
                                </dt>

                                <dd className="mod-list-profile__data align-right">
                                    <a href="https://www.instagram.com/heppokofrontend">Instagram: @heppokoFrontend</a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Page

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
