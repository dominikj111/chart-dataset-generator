const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const common = require("./webpack.common.js");

const showAnalyzerOutput =
  (process.env.ANALYZER ?? "true").toLowerCase() === "true";

const plugins = [new CleanWebpackPlugin()];

if (showAnalyzerOutput) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "BundleReport.html",
    })
  );
}

module.exports = merge(common, {
  mode: "production",
  plugins,
});
