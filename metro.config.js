const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config")
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname)

module.exports = withNativeWind(defaultConfig, { input: './global.css' })

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: {
      ...require("node-libs-react-native"),
    },
  },
}

module.exports = mergeConfig(defaultConfig, config)