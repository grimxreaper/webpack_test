const path = require("path");

module.exports = {
//   devtool: false,
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [

      {
        test: /\.html$/,
        use: ["html-loader"],

      },
    //   {
    //     test: /\.(svg|png|jpeg|gif)$/,
    //     use: {
    //       loader: "file-loader",
    //       options: {
    //         esModule: false,
    //         name: "[name].[hash].[ext]",
    //         outputPath: "imgs",
    //         publicPath: "/",
    //       },
    //     },
    //   },
    ],
  },

//   output: { publicPath: ''}
};
