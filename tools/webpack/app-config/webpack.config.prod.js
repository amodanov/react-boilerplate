/* eslint-disable @typescript-eslint/no-var-requires */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackConfigBase = require('./webpack.config.base');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
    ...webpackConfigBase,
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: {
                        passes: 2,
                        keep_fargs: false, // eslint-disable-line @typescript-eslint/camelcase
                    },
                    output: {
                        beautify: false,
                    },
                    mangle: true,
                },
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    preset: 'advanced',
                    safe: true,
                    map: {inline: false},
                    discardComments: {removeAll: true},
                },
            }),
        ],
    },
};
