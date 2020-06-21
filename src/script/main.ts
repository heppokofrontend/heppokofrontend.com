const mediaQueryList = window.matchMedia(`(min-width: 768px)`);

export default class HEPPOKO_FRONTEND {
    get isPCWidth() {
        return mediaQueryList.matches;
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
        const links = globalNavList?.querySelectorAll(`a`);
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
            windowResized: () => {
                if (this.isPCWidth) {
                    globalNavList!.hidden = false;
                    globalNavList!.style!.removeProperty(`height`);
                    btn.setAttribute(`aria-expanded`, `false`);

                    return;
                }

                globalNavList!.hidden = true;
                globalNavList!.style!.height = `0`;
            }
        };

        if (!globalNavList) {
            return;
        }

        globalNavList.before(btn);
        btn.addEventListener(`click`, handler.click);
        btn.addEventListener(`keydown`, handler.keydown.prev);
        links[links.length - 1]?.addEventListener(`keydown`, handler.keydown.next);
        globalNavList.addEventListener(`transitionend`, handler.transitionend);
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

        this.navGlobal();
    }
}
