import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StrPageTitle from "../components/str-pagetitle"

interface Prop {
    data: any
    location: any
}

const NotFoundPage = ({ data, location }: Prop) => {
    const siteTitle = data.site.siteMetadata.title
    const title = `このWebサイトについて`;
    const subTitle = location.pathname.replace(/\//g, ``);

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={`${title} - ${subTitle}`} />
            <StrPageTitle title={title} subTitle={subTitle} />
            <div className="str-outer">
                <div className="str-inner">
                    <div className="mod-txt">
                        <p>チラシの裏的な使い方をするスペースです。</p>
                        <p>へっぽこらしく、自由気ままにいろいろ発進していきたいと思います。</p>
                    </div>

                    <h2 className="mod-hdg-l2">
                        <span className="mod-hdg-l2__inner">対象ブラウザ</span>
                    </h2>

                    <div className="mod-txt">
                        <p>次のブラウザで動作確認をしています。</p>
                    </div>

                    <ul className="mod-list">
                        <li className="mod-list__item">
                            <span className="mod-list__txt">
                                Google Chrome最新版（macOS Catalina）
                            </span>
                        </li>
                        <li className="mod-list__item">
                            <span className="mod-list__txt">
                                Safari最新版（macOS Catalina）
                            </span>
                        </li>
                        <li className="mod-list__item">
                            <span className="mod-list__txt">
                                Google Chrome最新版（iOS）
                            </span>
                        </li>
                        <li className="mod-list__item">
                            <span className="mod-list__txt">
                                Safari最新版（iOS）
                            </span>
                        </li>
                    </ul>

                    <div className="mod-txt">
                        <p>べっ別に、FirefoxやEdgeが嫌いなわけじゃないんだからねっ！</p>
                        <p>でも、IEは大嫌いなので<strong>アクセスすらできない</strong>仕様になっております😇</p>
                    </div>

                    <h2 className="mod-hdg-l2">
                        <span className="mod-hdg-l2__inner">アクセシビリティ</span>
                    </h2>

                    <div className="mod-txt">
                        <p>原則、WCAG 2.1 の適合レベルAAを目指しています。</p>
                    </div>

                    <h2 className="mod-hdg-l2">
                        <span className="mod-hdg-l2__inner">ご注意</span>
                    </h2>

                    <div className="mod-txt">
                        <p>なるべく正確な情報を掲載する方針ですが、必ずしも正しいことを保証するものではありません。</p>
                        <p>当サイトの情報を利用した結果に関して、一切の責任を負いかねます🙇‍♂️🙇‍♂️🙇‍♂️</p>
                    </div>

                    <div className="mod-txt">
                        <p>誤りがありましたら、<a href="https://github.com/heppokofrontend/heppokofrontend.dev/issues">GitHubのIssues</a>からお知らせください。</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
