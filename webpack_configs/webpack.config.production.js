const merge = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const baseConfig = require("./webpack.config.base.js");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new CopyPlugin([
      {
        from: path.join(__dirname, "../src/img"),
        to: path.join(__dirname, "../public/img"),
      },
      {
        from: path.join(__dirname, "../src/index.html"),
        to: path.join(__dirname, "../public"),
      },
    ]),
  ],
});
