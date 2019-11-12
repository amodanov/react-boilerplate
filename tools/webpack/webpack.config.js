/* eslint-disable @typescript-eslint/no-var-requires */
const webpackConfigProd = require('./app-config/webpack.config.prod');
const webpackConfigDev = require('./app-config/webpack.config.dev');
/* eslint-enable @typescript-eslint/no-var-requires */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = () => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return webpackConfigDev;

        case 'production':
            return webpackConfigProd;

        default:
            return webpackConfigProd;
    }
};
