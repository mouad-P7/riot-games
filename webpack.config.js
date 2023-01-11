const path = require("path");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "eval",
    entry: "./src/index.js",
    output: {
        filename: "main-[contentHash].js",
        path: path.resolve(__dirname,"dist")
    },
    plugins: [
        new htmlPlugin({template: "template.html"})
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ["style-loader","css-loader"]}
        ]
    }

};