import React from 'react';
import ToggleMode from './toogle-mode';

const list = [
    [`about`, `このWebサイトについて`],
    [`profile`, `著者について`],
    [`links`, `リンク集`],
];
const callback = ([path, label]: string[]) => (
    <li className="nav-global__item" key={label}>
        <a href={`/${path}/`} className="nav-global__link">
            <span className="nav-global__txt">{label}</span>
            <span className="nav-global__txt">{path}</span>
        </a>
    </li>
);
const GlobalNav = ({isTop}: {
    isTop?: boolean
}) => (
    <nav className="nav-global" aria-label="グローバルナビゲーション">
        <div className="nav-global__inner">
            <div
                className="nav-global__dropdown"
                id="js-globalNav"
            >
                <ul className="nav-global__list">
                    {list.map(callback)}
                </ul>
                {
                    isTop ? `` : <ToggleMode isTop={isTop} />
                }
            </div>
        </div>
    </nav>
);

export default GlobalNav;
