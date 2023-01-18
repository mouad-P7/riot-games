const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        assetModuleFilename: 'images/[name][ext]',
        clean: true
    },
    plugins: [
        new htmlWebpackPlugin({template: "./src/template.html"})
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {test: /\.css$/, use: ["style-loader","css-loader"]},
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['@babel/preset-env']}
                }
            },
            {
                test: /\.(png|svg|jpe?g|gif|ico)$/,
                type: 'asset/resource'
            }
        ]
    }

};
