'use strict';

module.exports = {
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
  },
  'env': {
    'browser': true,
    'es6': true,
  },
  'presets': [
    [
      '@babel/preset-env',
      {
        'targets': {
          'browsers': [
            '>0.25%',
            'not ie 11',
            'not op_mini all',
          ],
        },
      },
    ],
  ],
};
