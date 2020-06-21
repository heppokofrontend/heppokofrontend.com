import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile-icn.png/" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                    }
                }
            }
        }
    `);
    const {author, social} = data.site.siteMetadata;

    return (
        <div className="mod-box-bio">
            <div className="mod-box-bio__inner">
                <div className="mod-box-bio__visual">
                    <img
                        src="/asset/image/mod/box-bio-img.png"
                        alt=""
                        width="50"
                        height="50"
                        className="mod-box-bio__img"
                    />
                </div>
                <div className="mod-box-bio__details">
                    <p className="mod-box-bio__txt">
                        {author.name}{author.summary}
                    </p>
                    <p className="mod-box-bio__tw">
                        <a href={`https://twitter.com/${social.twitter}`}>@{social.twitter}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bio
