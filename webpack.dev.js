const { merge } = require("webpack-merge");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const common = require("./webpack.common.js");

const plugins = [];

if (process.env.npm_lifecycle_event === "webpack:dev:watch") {
  plugins.push(new LiveReloadPlugin());
}

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins,
});
