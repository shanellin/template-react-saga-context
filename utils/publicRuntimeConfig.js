import getConfig from "next/config"

const runtimeConfig = getConfig()
const { publicRuntimeConfig, generateBuildId } = runtimeConfig || {}

const appENV = publicRuntimeConfig?.appENV
const buildId = process.env.CONFIG_BUILD_ID

export default {
  appENV,
  buildId
}
