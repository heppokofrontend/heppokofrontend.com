import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StrPageTitle from "../components/str-pagetitle"
import NumberPlace from "../components/elements/numberpalce"

interface Prop {
    data: any
    location: any
}

const NotFoundPage = ({ data, location }: Prop) => {
    const siteTitle = data.site.siteMetadata.title
    const title = `ギャラリー`;
    const subTitle = location.pathname.replace(/\//g, ``);
    const codePenStyle = {
        boxSizing: `border-box`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        border: `2px solid`,
        margin: `1em 0`,
        padding: `1em`
    } as React.CSSProperties;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={`${title} - ${subTitle}`} />
            <StrPageTitle title={title} subTitle={subTitle} />
            <div className="str-outer">
                <div className="str-inner">
                    <p
                        className="codepen"
                        data-height="623"
                        data-theme-id="dark"
                        data-default-tab="result"
                        data-user="heppokofrontend"
                        data-slug-hash="qBbgYoZ"
                        style={{height: `623px`, ...codePenStyle}}
                        data-pen-title="Number play ( Sudoku )"
                    >
                        <span>See the Pen <a href="https://codepen.io/heppokofrontend/pen/qBbgYoZ">Number play ( Sudoku )</a> by .Hiroya🍣🍵 (<a href="https://codepen.io/heppokofrontend">@heppokofrontend</a>) on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
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
