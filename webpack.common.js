const htmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new htmlPlugin({template: "template.html"})
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ["style-loader","css-loader"]}
        ]
    }

};
