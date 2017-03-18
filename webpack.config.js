var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var PreloadWebpackPlugin = require('preload-webpack-plugin');



module.exports = function(env){

    // default params
    var port = 8080;
    var host = 'localhost';

    // custom configuration options (via cli: 'yarn start -- --env.option')
    if(env){
        if(env.port){
            port = env.port;
        }
        if(env.host){
            host = env.host;
        }
    }

    // return config object
    return {
        entry: {
            main:[
                'react-hot-loader/patch',
                'webpack-dev-server/client?http://' + host + ':' + port,
                'webpack/hot/only-dev-server',
                'babel-polyfill',
                'normalize.css',
                './src/index'
            ]
        },

        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist/static'),
            publicPath: '/static/'
        },

        devtool: 'inline-source-map',

        module: {
            rules: [
                //{ enforce: 'pre', test: /\.(js||jsx)$/, exclude: /node_modules/, loader: 'eslint-loader' },
                { test: /\.(js|jsx)$/, use: ['babel-loader'], exclude: /node_modules/ },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader'] },
                { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, use: ['file-loader'] }
            ],
        },

        resolve: {
            modules: [path.resolve(__dirname, './src'), 'node_modules']
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new DashboardPlugin(),
            new webpack.DefinePlugin({
                __HMR__: true,
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                   // implicitly split all code from the 'node_modules' directory into this chunk
                   return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest',
                minChunks: Infinity
            }),
            new HtmlWebpackPlugin({
                alwaysWriteToDisk: true,
                title: 'boiler-pack (HMR)',
                template: path.resolve(__dirname, 'src/index.template.ejs')
            }),
            new PreloadWebpackPlugin({
                rel: 'prefetch'
            }),
            new HtmlWebpackHarddiskPlugin({
                outputPath: path.resolve(__dirname, 'dist')
            })
        ],

        devServer: {
            historyApiFallback: true,
            host: host,
            port: port,
            hot: true,
            quiet: true,
            contentBase: path.resolve(__dirname, 'dist'),
            publicPath: '/static/'
        },
    }
};
