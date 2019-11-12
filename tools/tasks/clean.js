/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const rimraf = require('rimraf');
const createTask = require('../utils/createTask');
const config = require('../../config');
/* eslint-enable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */

// Перед новой сборкой удалить папку с собранным проектом
/* eslint-disable no-async-promise-executor */
createTask('drop out folder', () => {
    return new Promise(async (resolve, reject) => {
        await rimraf(config.output.path, (error) => {
            if (error) {
                reject();
            }
        });
        resolve();
    });
});
/* eslint-enable no-async-promise-executor */
