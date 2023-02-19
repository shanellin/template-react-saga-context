const withCSS = require("@zeit/next-css")
const withImages = require("next-images")
const nextBuildId = require("next-build-id")
const webpack = require("webpack")

function apiBaseUrlConstructor(subpath = "") {
  switch (process.env.APP_ENV) {
    case "local":
      return `http://localhost:3000/xxx/api`
    case "dev":
      return `https://xxx-dev.com/xxx/api`
    case "uat":
      return `https://xxx-uat.com/xxx/api`
    case "preprd":
      return `https://xxx-preprd.com/xxx/api`
    case "prd":
      return `https://xxx.com/xxx/api`
    default:
      return `https://xxx-dev.com/xxx/api`
  }
}

module.exports = withImages(
  withCSS({
    assetPrefix: process.env.APP_PREFIX || "",
    serverRuntimeConfig: {
      logServerFlag: process.env.LOG_SERVER || false
    },
    env: {
      CI_COMMIT_SHORT_SHA: process.env.CI_COMMIT_SHORT_SHA
    },
    publicRuntimeConfig: {
      appENV: process.env.APP_ENV || "",
      assetPrefix: process.env.APP_PREFIX || "",
      apiBaseUrl: apiBaseUrlConstructor()
    },
    webpack: (config, _options) => {
      config.plugins.push(
        ...[
          new webpack.DefinePlugin({
            "process.env.CONFIG_BUILD_ID": JSON.stringify(_options.buildId)
          })
        ]
      )
      return config
    },
    generateBuildId: () => nextBuildId({ dir: __dirname })
  })
)
