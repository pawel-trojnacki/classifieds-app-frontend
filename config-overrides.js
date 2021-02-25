const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      modules: path.resolve(__dirname, 'src/modules'),
      router: path.resolve(__dirname, 'src/router'),
      theme: path.resolve(__dirname, 'src/theme'),
      utils: path.resolve(__dirname, 'src/utils'),
      types: path.resolve(__dirname, 'src/types'),
      store: path.resolve(__dirname, 'src/store'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      assets: path.resolve(__dirname, 'src/assets'),
      constants: path.resolve(__dirname, 'src/constants'),
      __mocks__: path.resolve(__dirname, 'src/__mocks__'),
    },
  };

  return config;
};
