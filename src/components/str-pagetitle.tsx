import React from 'react'

const Layout  = ({title, subTitle}: {
    title: string,
    subTitle: string
}) => {
    return (
        <div className="str-pageTitle">
            <div className="str-pageTitle__inner">
                <h1 className="str-pageTitle__txt">
                    <strong className="str-pageTitle__main">
                        {title}
                    </strong>
                    <span className="str-pageTitle__sub">
                        {subTitle}
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default Layout
