import React, { ChangeEvent } from 'react';

const html = document.documentElement;
const savedata = (() => {
    try {
        return JSON.parse(
            localStorage.getItem(`toggle-mode-state`) || `{
                "checked": false
            }`
        );
    } catch {
        return {
            checked: false
        };
    }
})();
const onchange = function (e: ChangeEvent) {
    savedata.checked = (e.target as HTMLInputElement).checked;
    html.dataset.isDarkMode = savedata.checked;

    try {
        localStorage.setItem(
            `toggle-mode-state`,
            JSON.stringify(savedata)
        );
    } catch {}
};
const ToggleMode = ({isTop}: {
    isTop?: boolean
}) => {
    const className = isTop ? `site-header-top__` :  `site-header__`;

    return (
        <div className={`${className}toggleMode`}>
            <label className={`${className}toggleModeInner`}>
                <input
                    type="checkbox"
                    id="js-toggle-mode"
                    className={`${className}toggleModeInput`}
                    onChange={onchange}
                    defaultChecked={savedata.checked}
                />
                <span className={`${className}toggleModeLabel`}>
                    <span className={`${className}toggleModeTxt`}>
                        ダークモードを有効にする
                    </span>
                </span>
            </label>
        </div>
    );
};


html.dataset.isDarkMode = savedata.checked;

export default ToggleMode;
