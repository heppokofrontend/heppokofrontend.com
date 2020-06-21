module.exports = {
    parser: `@typescript-eslint/parser`,
    parserOptions: {
        sourceType: `module`,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: `module`
    },
    rules: {
        indent: [`error`, 4],
        quotes: [`error`, `backtick`],
        'dot-location': [`error`, `property`],
        'arrow-parens': [`error`, `as-needed`],
        'space-before-function-paren': [
            `error`,
            {
                anonymous: `always`,
                named: `never`,
                asyncArrow: `always`
            }
        ],
        'function-paren-newline': [`error`, `multiline-arguments`],
        'implicit-arrow-linebreak': [`error`, `beside`],
        'arrow-spacing': [
            `error`,
            {
                before: true,
                after: true
            }
        ],
        'lines-between-class-members': [
            `error`, `always`, { exceptAfterSingleLine: true }
        ],
        'linebreak-style': [`error`, `unix`],
        'no-unused-expressions': `off`,
        'function-paren-newline': `off`,
        'no-new': `off`,
        'generator-star-spacing': [
            "error",
            {
                before: false,
                after: true
            }
        ],

        // ts
        'no-explicit-any': `off`
    },

    // react
    globals: {
        __PATH_PREFIX__: true,
    },
    plugins: [
        `react`
    ],
    extends: [`react-app`, `plugin:react/recommended`]
};
