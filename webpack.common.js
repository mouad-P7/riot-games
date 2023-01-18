const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
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
            
        ]
    }

};
