import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StrPageTitle from "../components/str-pagetitle"

interface Prop {
    data: any
    location: any
}

const Page = ({ data, location }: Prop) => {
    const siteTitle = data.site.siteMetadata.title
    const title = `リンク集`;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={title} />
            <StrPageTitle title={title} />
            <div className="str-outer">
                <div className="str-inner">
                    <div className="mod-txt">
                        <p>工事中</p>
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
