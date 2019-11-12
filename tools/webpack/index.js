/* eslint-disable @typescript-eslint/no-var-requires */
// const webbPackDLLConf = require('./dll/index');
const webbPackBaseConf = require('./webpack.config');
/* eslint-enable @typescript-eslint/no-var-requires */

// Собираем пачку либ
// module.exports = webbPackDLLConf.concat([webbPackBaseConf]);

module.exports = webbPackBaseConf;
