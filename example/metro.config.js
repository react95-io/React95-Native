const path = require('path');

const externalPath = path.resolve(`${__dirname}/../src`);

const extraNodeModules = {
  'react95-native': externalPath
};

const watchFolders = [externalPath];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        name in target
          ? target[name]
          : path.join(process.cwd(), `node_modules/${name}`)
    })
  },
  watchFolders
};
