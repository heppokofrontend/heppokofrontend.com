import React from 'react'
import SiteHeader from './site-header/index';
import SiteFooter from './site-footer/index';
import { Helmet } from 'react-helmet';

interface LayoutProps {
    title: string
    location: any
    children: React.ReactNode
}

const Layout  = ({location, title, children}: LayoutProps) => {
    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp-narrow.min.css"
                />
            </Helmet>

            <SiteHeader　location={location} title={title} />
            <main className="site-main">
                {children}
            </main>
            <SiteFooter />
        </>
    )
}

export default Layout
