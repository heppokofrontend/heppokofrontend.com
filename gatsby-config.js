module.exports = {
    siteMetadata: {
        title: `へっぽこフロントエンド道`,
        author: {
            name: `.Hiroya🍣🍵`,
            summary: `へっぽこフロントエンドエンジニアです。Web制作が好き。`,
        },
        description: `へっぽこフロントエンドエンジニア`,
        siteUrl: `https://heppokofrontend.dev/`,
        social: {
            twitter: `heppokofrontend`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require(`autoprefixer`)({
                        grid: true
                    }),
                    require(`css-mqpacker`)({
                        sort: true
                    }),
                    require(`postcss-pxtorem`)({
                        propList: [
                            `font-size`,
                            `letter-spacing`
                        ]
                    })
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-plugin-graphql-codegen`,
            options: {
                fileName: `types/graphql-types.d.ts`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `へっぽこフロントエンド道`,
                short_name: `へっぽこフロントエンド道`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#feec00`,
                display: `minimal-ui`,
                icon: `./content/assets/favicon.png`,
            },
        },
        `gatsby-plugin-react-helmet`
    ],
}
