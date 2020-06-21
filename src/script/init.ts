const html = document.documentElement;

html.dataset.script = `enabled`;

window.addEventListener(`click`, () => {
    html.dataset.usingKeyboard = `false`;
})

window.addEventListener(`keyup`, ({key}) => {
    if (
        key === `Tab` ||
        key === `Enter` ||
        key === ` ` ||
        /^Arrow/.test(key)
    ) {
        html.dataset.usingKeyboard = `true`;
    }
});
