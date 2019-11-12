/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('../../config');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
    loaderConfig: {
        javascript: {
            include: config.source.path,
            use: ['thread-loader', 'babel-loader'],
        },
        typeScript: {
            include: config.source.path,
            use: ['thread-loader', 'babel-loader'],
        },
        less: {
            use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
        },
        css: {
            use: ['style-loader', 'css-loader'],
        },
        fonts: {
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        context: config.fonts.path,
                        name: '[path][name].[ext]',
                        publicPath: '../',
                    },
                },
            ],
        },
        image: {
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        context: config.image.path,
                        name: '[path][name].[ext]',
                        publicPath: '../',
                        emitFile: false,
                    },
                },
            ],
        },
    },
};
