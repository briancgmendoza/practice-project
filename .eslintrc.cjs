module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier'
    ],
    rules: {
        'react/react-in-jsx-scope': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        "import/prefer-default-export": "off",
        "prettier/prettier": "error"
    }
}
