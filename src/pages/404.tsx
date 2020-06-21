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

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="404: Not Found" />
            <StrPageTitle title="Not Found" />
            <div className="str-outer">
                <div className="str-inner">
                    <div className="mod-txt">
                        <p>残念ながらこのページはもともと存在しないか、移動してしまったっぽいです。</p>
                    </div>

                    <div className="mod-txt">
                        <p><a href="/">HOMEへ戻る</a></p>
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
