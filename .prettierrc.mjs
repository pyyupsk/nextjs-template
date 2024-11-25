/** @type {import('prettier').Config} & @type {import('prettier-plugin-tailwindcss').Config} */
const config = {
    plugins: ['prettier-plugin-pkg', 'prettier-plugin-tailwindcss'],
    semi: true,
    singleQuote: true,
    jsxSingleQuote: false,
    trailingComma: 'all',
    tabWidth: 4,
    useTabs: false,
    printWidth: 100,
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'lf',
};

export default config;
