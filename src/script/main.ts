const mediaQueryList = window.matchMedia(`(min-width: 768px)`);
const html = document.documentElement;

export default class HEPPOKO_FRONTEND {
    get isPCWidth() {
        return mediaQueryList.matches;
    }

    private toggleMode() {
        const target = document.getElementById(`js-toggle-mode`);
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
        const onchange = function (e: Event) {
            savedata.checked = (e.target as HTMLInputElement).checked;
            html.dataset.darkMode = savedata.checked;

            try {
                localStorage.setItem(
                    `toggle-mode-state`,
                    JSON.stringify(savedata)
                );
            } catch {}
        };

        html.dataset.darkMode = savedata.checked;

        if (target) {
            target.addEventListener(`change`, onchange);
        }
    }

    private navGlobal() {
        const id = `js-globalNav`;
        const globalNavList = document.getElementById(id);
        const btn = (() => {
            const elm = document.createElement(`button`);

            elm.type = `button`;
            elm.className = `func-btn`;
            elm.innerHTML = `<span class="func-btn__txt">メニュー</span>`;
            elm.setAttribute(`aria-expanded`, `false`);
            elm.setAttribute(`aria-controls`, id);

            return elm;
        })();
        const reflow = () => globalNavList?.clientHeight;
        const links = globalNavList ? globalNavList.querySelectorAll(`a`) : [];
        const handler = {
            click: () => {
                if (this.isPCWidth) {
                    return;
                }

                if (btn.getAttribute(`aria-expanded`) === `true`) {
                    globalNavList!.style.height = `${globalNavList!.clientHeight}px`;
                    reflow();
                    globalNavList!.style.height = `0`;
                    globalNavList!.hidden = true;
                    btn.setAttribute(`aria-expanded`, `false`);

                    return;
                }

                globalNavList!.style.height = `0`;
                reflow();
                globalNavList!.style.height = `${globalNavList?.scrollHeight}px`;
                globalNavList!.hidden = false;
                btn.classList.add(`is-open`);
                btn.setAttribute(`aria-expanded`, `true`);
            },
            transitionend(this: HTMLElement, e: TransitionEvent) {
                if (
                    e.propertyName === `height` &&
                    e.target === globalNavList
                ) {
                    this.style.removeProperty(`height`);

                    if (btn.getAttribute(`aria-expanded`) === `false`) {
                        btn.classList.remove(`is-open`);
                    }
                }
            },
            keydown: {
                next(e: KeyboardEvent) {
                    if (
                        btn.getAttribute(`aria-expanded`) === `true` &&
                        e.key === `Tab` &&
                        !e.shiftKey
                    ) {
                        e.preventDefault();
                        btn.focus();
                    }
                },
                prev(e: KeyboardEvent) {
                    if (
                        btn.getAttribute(`aria-expanded`) === `true` &&
                        e.key === `Tab` &&
                        e.shiftKey
                    ) {
                        e.preventDefault();
                        links[links.length - 1].focus();
                    }
                }
            },
            stopPropagation(e: Event) {
                e.stopPropagation();
            },
            closeClick: () => {
                if (
                    !this.isPCWidth &&
                    btn.getAttribute(`aria-expanded`) === `true`
                ) {
                    btn.click();
                }
            },
            windowResized: () => {
                if (
                    this.isPCWidth ||
                    btn.getAttribute(`aria-expanded`) === `false`
                ) {
                    btn.classList.remove(`is-open`);
                    btn.setAttribute(`aria-expanded`, `false`);
                }

                if (this.isPCWidth) {
                    globalNavList!.hidden = false;
                    globalNavList!.style!.removeProperty(`height`);
                    btn.classList.remove(`is-open`);
                    btn.setAttribute(`aria-expanded`, `false`);

                    return;
                }

                if (btn.getAttribute(`aria-expanded`) === `false`) {
                    globalNavList!.hidden = true;
                    globalNavList!.style!.height = `0`;
                }
            }
        };

        if (!globalNavList) {
            return;
        }

        globalNavList.before(btn);
        btn.addEventListener(`click`, handler.click);
        btn.addEventListener(`click`, handler.stopPropagation);
        btn.addEventListener(`keydown`, handler.keydown.prev);
        links[links.length - 1]?.addEventListener(`keydown`, handler.keydown.next);
        globalNavList.addEventListener(`transitionend`, handler.transitionend);
        globalNavList.addEventListener(`click`, handler.stopPropagation);
        window.addEventListener(`click`, handler.closeClick);
        window.addEventListener(`windowresized`, handler.windowResized);
        handler.windowResized();
    }

    constructor() {
        // windowサイズが変更し終わった時
        {
            let key: NodeJS.Timeout | number = -1;
            let cache = window.innerWidth;
            const windowResizedEvent = new Event(`windowresized`);
            const check = () => {
                if (cache !== window.innerHeight) {
                    window.dispatchEvent(windowResizedEvent);
                }

                key = -1;
            };

            window.addEventListener(`resize`, () => {
                clearTimeout(key as number);
                cache = window.innerWidth;
                key = setTimeout(check, 200);
            });
        }

        this.toggleMode();
        this.navGlobal();
    }
}
