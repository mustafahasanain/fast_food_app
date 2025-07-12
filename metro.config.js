const { withNativeWind } = require("nativewind/metro");
const {
  getSentryExpoConfig
} = require("@sentry/react-native/metro");

const config = getSentryExpoConfig(__dirname);

config.resolver.assetExts.push("ttf");

module.exports = withNativeWind(config, { input: "./app/globals.css" });