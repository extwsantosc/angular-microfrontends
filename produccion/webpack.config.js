const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    uniqueName: "ceiba_produccion",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ceiba_produccion",
      filename: "remoteEntry.js",
      exposes: {
        './produccion.module': "./src/app/feature/produccion/produccion.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true },
      },
    }),
  ],
};
