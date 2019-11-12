/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appConfig = require('../../../config');
/* eslint-enable @typescript-eslint/no-var-requires */

const webpackMode = process.env.NODE_ENV;

/* eslint-disable @typescript-eslint/explicit-function-return-type */
function getCssExtractPluginOptions(mode) {
    const defaultOptions = {
        filename: '[name].css',
        chunkFilename: '[id].css',
    };

    switch (mode) {
        case 'production':
            return {
                filename: '[name].[contenthash:4].css',
                chunkFilename: '[id].[contenthash:4].css',
                allChunks: true,
            };

        case 'development':
            return defaultOptions;

        default:
            return defaultOptions;
    }
}
/* eslint-enable @typescript-eslint/explicit-function-return-type */

const plugins = [
    new HtmlWebpackPlugin({
        filename: appConfig.output.htmlFilePath,
        hash: true,
        inject: true,
        template: appConfig.tools.webpack.templateFilePath,
    }),
    new MiniCssExtractPlugin(getCssExtractPluginOptions(webpackMode)),
    new webpack.ProgressPlugin({
        entries: true,
    }),
];

module.exports = plugins;
