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
        filename: appConfig.output.css.dev.fileName,
        chunkFilename: appConfig.output.css.dev.chunkFilename,
    };

    switch (mode) {
        case 'production':
            return {
                filename: appConfig.output.css.prod.fileName,
                chunkFilename: appConfig.output.css.prod.chunkFilename,
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
