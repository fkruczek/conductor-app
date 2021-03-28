/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  "extends": "@snowpack/app-scripts-react",
  // mount: {
  //   public: { url: '/', static: true },
  //   src: { url: '/dist' },
  // },
  plugins: [
    // '@snowpack/plugin-dotenv',
    // '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    // @snowpack/plugin-webpack (prod build)
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    knownEntrypoints: ['@emotion/react', '@emotion/styled'],
    // source: 'remote',
    // types: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
