const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    // devtool: false,
    entry: "./src/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: [
                "style-loader", //3. inject styles into DOM
                "css-loader", //2. turns css into commonjs
                "sass-loader" //1. turns sass into css
            ]
            }
        ]
    }

}