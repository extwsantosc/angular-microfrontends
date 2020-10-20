const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    uniqueName: "ceiba_tecnica",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ceiba_tecnica",
      filename: "remoteEntry.js",
      exposes: {
        './tecnica.module': "./src/app/feature/tecnica/tecnica.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true },
      },
    }),
  ],
};
