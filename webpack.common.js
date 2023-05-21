const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const config = {
  entry: {
    admin: "./src/Admin/entry.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            type: "javascript/auto",
            exclude: [/node_modules/],
            use: [
              {
                loader: "babel-loader",
              },
            ],
          },
          {
            // This loader config is responsible to replace (const|let)\s js keywords with var in the vendors bundle.
            test: /\.(js|mjs)$/,
            type: "javascript/auto",
            use: [
              {
                loader: "babel-loader",
                options: {
                  babelrc: false,
                  configFile: false,
                  compact: false,
                  presets: [
                    [
                      require.resolve("babel-preset-react-app/dependencies"),
                      { helpers: true },
                    ],
                  ],
                  cacheDirectory: true,
                  cacheCompression: false,
                  sourceMaps: true,
                  inputSourceMap: true,
                },
              },
            ],
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        type: "javascript/auto",
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
          publicPath:
            "file:///Users/dominikjelinek/my/Development/projects/ranchart/dist/",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
          publicPath:
            "file:///Users/dominikjelinek/my/Development/projects/ranchart/dist/",
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
          publicPath:
            "file:///Users/dominikjelinek/my/Development/projects/ranchart/dist/",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "(Base)": path.resolve(__dirname, "./src/Base/"),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: (module) =>
            !!/[\\/]node_modules[\\/]/.exec(module.resource) &&
            !/[\\/]node_modules[\\/]lodash.*/.exec(module.resource) &&
            !/[\\/]node_modules[\\/]react-grid-layout.*/.exec(module.resource),
          name: "vendors~main",
          chunks: "all",
        },
        lodash: {
          test: (module) =>
            Boolean(/[\\/]node_modules[\\/]lodash.*/.exec(module.resource)),
          name: "vendors~lodash",
          chunks: "all",
        },
        reactgridlayout: {
          test: (module) =>
            Boolean(
              /[\\/]node_modules[\\/]react-grid-layout.*/.exec(module.resource)
            ),
          name: "vendors~reactgridlayout",
          minSize: 1048576,
          chunks: "all",
        },
      },
    },
  },
  performance: {
    hints: false,
  },
};

module.exports = config;
