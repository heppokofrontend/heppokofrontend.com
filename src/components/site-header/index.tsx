import React from 'react';
import {Link} from 'gatsby';
import GlobalNav from './nav-global';
import ToggleMode from './toogle-mode';

interface Prop {
    location: any
    title: string
}

const siteHeader = ({location, title}: Prop) => {
    const isTop = location.pathname === `/`;
    const Navigation = () => {
        const links = [
            {
                href: `https://twitter.com/heppokoFrontend`,
                src: `twitter-100.png`,
                alt: `Twitter`
            },
            {
                href: `https://github.com/heppokofrontend`,
                src: `github-100.png`,
                alt: `GitHub`
            },
            {
                href: `https://qiita.com/heppokofrontend`,
                src: `qiita-100.png`,
                alt: `Qiita`
            },
            {
                href: `https://peing.net/ja/heppokofrontend`,
                src: `peing-100.png`,
                alt: `質問箱`
            },
            {
                href: `https://www.instagram.com/heppokofrontend/`,
                src: `instagram-100.png`,
                alt: `instagram`
            },
            {
                href: `https://note.com/heppokofrontend`,
                src: `note-100.png`,
                alt: `note`
            }
        ];
        const callback = ({href, src, alt}: {
            [key: string]: string
        }) => {
            return (
                <li className="nav-sns__item" key={alt}>
                    <a href={href} className="nav-sns__link" title={alt}>
                        <span className="nav-sns__icn">
                            <img
                                src={`/asset/image/logo/${src}`}
                                alt={alt}
                                aria-hidden="true"
                                className="nav-sns__img"
                            />
                        </span>
                    </a>
                </li>
            );
        };

        return (
            <nav className="nav-sns" aria-labelledby="label-nav-sns">
                <h2 className="mod-txt-invisible" id="label-nav-sns">
                    SNSリンク
                </h2>

                <div className="nav-sns__symbol">
                    <img
                        src="/asset/image/kp/01.png"
                        alt=""
                        className="nav-sns__kp"
                    />
                </div>
                <ul className="nav-sns__list">
                    {links.map(callback)}
                </ul>
            </nav>
        );
    };

    return isTop ? (
        <header className="site-header-top">
            <div className="site-header-top__primary">
                <h1 className="site-header-top__sitename">
                    <img
                        src="/asset/image/site/header-img.png"
                        className="site-header-top__logo"
                        alt={title}
                    />
                </h1>

                <ToggleMode isTop={isTop} />

                <div className="site-header-top__sns">
                    <Navigation />
                </div>
            </div>

            <div className="site-header-top__secondary">
                <h1 className="site-header-top__sitename">
                    <Link className="site-header-top__link" to={`/`}>
                        <img
                            src="/asset/image/site/header-img.png"
                            className="site-header-top__logo"
                            alt={title}
                        />
                    </Link>
                </h1>

                <div className="site-header-top__navigation">
                    <GlobalNav isTop={isTop} />
                </div>
            </div>
        </header>
    ) : (
        <header className="site-header">
            <div className="site-header__inner">
                <h1 className="site-header__sitename">
                    <Link className="site-header__link" to={`/`}>
                        <img
                            src="/asset/image/site/header-img.png"
                            className="site-header__logo"
                            alt={title}
                        />
                    </Link>
                </h1>

                <div className="site-header__navigation">
                    <GlobalNav isTop={isTop} />
                </div>
            </div>
        </header>
    )
};

export default siteHeader;
