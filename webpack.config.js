const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        },{
            test: /\.s?css$/,
            use: [{
                loader: "style-loader"
            },{
                loader: "css-loader"
            },{
                loader: "sass-loader"
            }]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true
    },
    devtool: "cheap-module-eval-source-map",
    mode: "development"
};