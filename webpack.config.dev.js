/**
 * Created by caelumtian on 16/5/14.
 */
var webpack = require("webpack");
var path = require("path");

var config = {
    devtool: 'eval-source-map',
    watch  : true,

    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path      : __dirname + '/output',
        publicPath: '/output/',
        filename  : 'index.js'
    },
    module: {
        loaders: [
            {
                test   : /\.(jsx|js)?$/,
                exclude: [/node_modules/],
                loaders: ['react-hot-loader', 'babel', 'html-path-loader']
            },
            {
                test   : /\.(jsx|js)?$/,
                exclude: [/node_modules/],
                loaders: ['html-path-loader']
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {   test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;