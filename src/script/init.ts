const html = document.documentElement;

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
