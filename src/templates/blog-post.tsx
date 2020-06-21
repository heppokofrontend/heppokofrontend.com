import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from 'gatsby-image';

interface Prop extends PageProps<Data>{
    data: any
    pageContext: {
        [key: string]: any
    }
}

const BlogPostTemplate = ({ data, pageContext, location }: Prop) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext
    const toc = data.markdownRemark.tableOfContents;
    const Tags = ({tags}: {
        tags: string[]
    }) => tags ? (
        <div className="str-article__tag">
            <ul className="str-article__tagList">
                {
                    tags.map((tag: string) => (
                        <li key={tag} className="str-article__tagItem">
                            <span className="str-article__tagTxt">
                                {tag}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    ) : null;
    const addClassNameToc = (_src: string) => {
        let src = _src;

        src = src.replace(/<ul/g, `<ul class="str-article__tocList"`);
        src = src.replace(/<li/g, `<li class="str-article__tocItem"`);
        src = src.replace(/<p>/g, `<span>`);
        src = src.replace(/<\/p>/g, `</span>`);
        src = src.replace(/<a/g, `<a class="str-article__tocLink"`);

        return `<h2 class="str-article__tocHdg">TOC</h2>${src}`;
    };
    const src = data?.markdownRemark?.frontmatter?.hero?.childImageSharp?.fluid;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title={`${post.frontmatter.title} `}
                description={post.frontmatter.description || post.excerpt}
            />
            <div className="str-outer">
                <article className="str-article">
                    <header className="str-article__header">
                        <h1 className="str-article__title">{post.frontmatter.title}</h1>
                        <p className="str-article__date">{post.frontmatter.date}</p>
                        <Tags tags={post.frontmatter.tags} />
                        {
                            src ? (
                                <div className="str-article__visual">
                                    <Image
                                        fluid={src}
                                        alt=""
                                        className="str-article__img"
                                    />
                                </div>
                            ) : null
                        }
                        {
                            toc ? (
                                <div
                                    className="str-article__toc"
                                    dangerouslySetInnerHTML={{
                                        __html: addClassNameToc(toc)
                                    }}
                                />
                            ): null
                        }
                    </header>
                    <section
                        className="str-article__content"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                    <footer className="str-article__footer">
                        <Bio />
                    </footer>

                    <nav className="str-article__pager">
                        <ul className="str-article__pagerInner">
                            {previous && (
                                <li className="str-article__pagerPrev">
                                    <Link
                                        className="str-article__pagerLink"
                                        to={previous.fields.slug}
                                        rel="prev"
                                    >
                                        {previous.frontmatter.title}
                                    </Link>
                                </li>
                            )}
                            {next && (
                                <li className="str-article__pagerNext">
                                    <Link
                                        className="str-article__pagerLink"
                                        to={next.fields.slug}
                                        rel="next"
                                    >
                                        {next.frontmatter.title}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </article>
            </div>
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(
                    formatString: "YYYY年 MM月DD日（dd）"
                    locale: "ja-JP"
                )
                description
                hero {
                childImageSharp {
                    fluid(maxWidth: 1280) {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
            }
            tableOfContents
        }
    }
`
