import React from 'react';

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

const ToggleMode = ({isTop}: {
    isTop?: boolean
}) => {
    const className = isTop ? `site-header-top__` :  `nav-global__`;

    return (
        <div className={`${className}toggleMode`}>
            <label className={`${className}toggleModeInner`}>
                <input
                    type="checkbox"
                    id="js-toggle-mode"
                    className={`${className}toggleModeInput`}
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

export default ToggleMode;
