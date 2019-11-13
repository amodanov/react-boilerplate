/* eslint-disable @typescript-eslint/no-var-requires */
const appConfig = require('../../../config');
const webPackConfig = require('../config');
const plugins = require('../plugins');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
    context: __dirname,
    entry: {
        app: appConfig.source.filePath,
    },
    optimization: {
        namedModules: true,
        noEmitOnErrors: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                ...webPackConfig.loaderConfig.javascript,
            },
            {
                test: /\.(ts|tsx)?$/,
                ...webPackConfig.loaderConfig.typeScript,
            },
            {
                test: /\.(svg|jpg|jpeg|png)$/,
                ...webPackConfig.loaderConfig.image,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                ...webPackConfig.loaderConfig.fonts,
            },
            {
                test: /\.css$/,
                ...webPackConfig.loaderConfig.css,
            },
            {
                test: /\.less$/,
                ...webPackConfig.loaderConfig.less,
            },
        ],
    },
    output: {
        path: appConfig.output.path,
        filename: appConfig.output.js.dev.fileName,
        chunkFilename: appConfig.output.js.dev.chunkFilename,
    },
    plugins: [...plugins],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
};
