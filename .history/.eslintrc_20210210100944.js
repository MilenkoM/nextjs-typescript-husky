module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
                // I will use TypeScript's types for component props instead
                'react/prop-types': 'off',

                // No need to import React when using Next.js
                'react/react-in-jsx-scope': 'off',
        
                // This rule is not compatible with Next.js's <Link /> components
                'jsx-a11y/anchor-is-valid': 'off',
        
                // Why would you want unused vars?
                '@typescript-eslint/no-unused-vars': ['error'],
    }
};
