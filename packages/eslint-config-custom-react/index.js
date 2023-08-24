module.exports = {
    plugins: ['@typescript-eslint'],
    extends: ['turbo', 'prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        'no-console': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/react-in-jsx-scope': 'off',
        '@next/next/no-img-element': 'off',
    },
};
