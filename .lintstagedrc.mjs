export default {
    '*': 'pnpm prettier --write --ignore-unknown',
    '**/*.(ts|tsx|js|jsx)': (filenames) => {
        return [`pnpm next lint --fix --file ${filenames.map((f) => JSON.stringify(f)).join(' ')}`];
    },
};
