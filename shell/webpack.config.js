const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    uniqueName: "ceiba_shell",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ceiba_shell",
      remotes: {
        ceiba_tecnica: "ceiba_tecnica@http://localhost:3001/remoteEntry.js",
        ceiba_produccion: "ceiba_produccion@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true },
      },
    }),
  ],
};
