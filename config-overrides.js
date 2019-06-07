const path = require("path");
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve = {
    ...config.resolve,
    alias: {
      "react-native-linear-gradient": path.resolve(
        __dirname,
        "./mocked_modules/react-native-linear-gradient"
      )
    }
  };
  return config;
};
