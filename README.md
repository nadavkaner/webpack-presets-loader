[![npm version](https://badge.fury.io/js/webpack-presets-loader.svg)](https://badge.fury.io/js/webpack-presets-loader)
[![CircleCI](https://circleci.com/gh/nadavkaner/webpack-presets-loader.svg?style=shield)](https://circleci.com/gh/nadavkaner/webpack-presets-loader)
[![codecov](https://codecov.io/gh/nadavkaner/webpack-presets-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/nadavkaner/webpack-presets-loader)


# webpack-presets-loader
Lightweight webpack util for loading config presets.
Making it possible to composite multiple webpack config presets.

# Getting Started
To begin, you'll need to install `webpack-presets-loader`:
```console
$ npm install webpack-presets-loader --save-dev
```

# Usage
```js
const webpackPresets = require('webpack-presets-loader');
```

```js
// webpack.config.js
module.exports = ({ mode, presets }) => {
  webpackMerge({
      mode,
      module: {
        rules: [
          test: /\.txt$/,
          use: 'raw-loader'
        ]
      }
    },
    webpackPresets('./presets', { presets })
  )
}
```

