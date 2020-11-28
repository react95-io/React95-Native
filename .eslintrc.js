module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/no-unresolved': ['error', { ignore: ['react95'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'jsx-a11y/label-has-for': 'off',
    'prettier/prettier': 'error',
    'react/no-array-index-key': 'off',
    'react/forbid-prop-types': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-use-before-define': 'off',
    'react/require-default-props': 'off',
  },
};
