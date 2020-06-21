import React from 'react';
import Bio from "../../components/bio"

const siteFooter = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <p className="site-footer__twitter"><a href="https://twitter.com/heppokoFrontend">@heppokoFrontend</a></p>
                <p className="site-footer__copyright"><small>©へっぽこフロントエンド道 {new Date().getFullYear()}</small></p>
            </div>
        </footer>
    )
};

export default siteFooter;
