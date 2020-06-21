// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }: PageProps<Data>) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const callback = ({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
            <div className="mod-link-articles__item" key={node.fields.slug}>
                <Link className="mod-link-articles__link" to={node.fields.slug}>
                    <h3 className="mod-link-articles__title">{title}</h3>
                    <p className="mod-link-articles__date">{node.frontmatter.date}</p>
                    <p
                        className="mod-link-articles__description"
                        dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                        }}
                    />
                </Link>
            </div>
        )
    }

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="" />
            <div className="str-outer">
                <div className="str-inner">
                    <h2 className="mod-hdg-l2">
                        <span className="mod-hdg-l2__inner">雑記一覧</span>
                    </h2>

                    <div className="mod-link-articles">
                        <div className="mod-link-articles__inner">
                            {posts.map(callback)}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(
                            formatString: "YYYY年 MM月DD日（dd）"
                            locale: "ja-JP"
                        )
                        title
                        description
                    }
                }
            }
        }
    }
`
