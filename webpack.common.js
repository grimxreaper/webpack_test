const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // devtool: false,
    entry: "./src/index.js",
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
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                      name: "[name].[hash].[ext]",
                      outputPath: "imgs"
                    }
                }
            }
        ]
    }
 
}