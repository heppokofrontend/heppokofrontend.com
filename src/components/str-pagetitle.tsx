import React from 'react'

const Layout  = ({title}: {
    title: string
}) => {
    return (
        <div className="str-pageTitle">
            <div className="str-pageTitle__inner">
                <h1 className="str-pageTitle__txt">
                    {title}
                </h1>
            </div>
        </div>
    )
}

export default Layout
