const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    // devtool: false,
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
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