/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const successString = 'успешно завершена';
const errorString = 'завершена с ошибкой';

/**
 * @param {Date} date Дата которую требуется преобразовать в строку времени.
 *
 * @return {string} Время
 */
const getTimeFromDate = (date) => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

/**
 * @param {string} name Название исполняемой задачи.
 * @param {Date} dateStartTask Дата начала выполнения задачи, для вычесления времени выполнения.
 * @param {string} message сообщение о статусе исполнения.
 * @param {Function} logFunction Функция вывода лога.
 * @param {string|null} additionalMessage дополнительное сообщение с новой строки.
 *
 * @return {void}
 */
const logResultLoadTask = (name, dateStartTask, message, logFunction, additionalMessage = null) => {
    // Дата завершения выполнения задачи
    const finishDate = new Date();
    const finishTime = getTimeFromDate(finishDate);
    // Время выполнения задачи
    const loadTime = finishDate.getTime() - dateStartTask.getTime();
    logFunction(`Задача ${name} ${message} в ${finishTime} спустя ${loadTime} ms.${additionalMessage ? `\n${additionalMessage}` : ''}`);
};

/**
 * @param {string} name название задачи.
 * @param {Promise|Function} fn Промис для задачи.
 */
module.exports = (name, fn) => {
    return new Promise((resolve, reject) => {
        // Дата начала выполнения задачи
        const dateStartTask = new Date();
        const timeStartTime = getTimeFromDate(dateStartTask);
        console.log(`Задача ${name} запущена в ${timeStartTime}.`);

        // Фнкция вызывается в случае успешного завершения задачи
        const onFinish = () => {
            // Вывод сообщения о том что задача завершилась успешно.
            logResultLoadTask(name, dateStartTask, successString, console.log);
            resolve();
        };

        // Функция вызывается в случае ошибки в процессе выполнения задачи
        const onError = (errorMessage) => {
            // Вывод сообщения о том что задача завершилась с ошибкой.
            logResultLoadTask(name, dateStartTask, errorString, console.warn, errorMessage);
            process.exit(1);
            reject(new Error(errorMessage));
        };

        // Пытаемся выполнить пользовательскую таску
        try {
            const resultLoadFn = fn();

            if (resultLoadFn instanceof Promise) {
                resultLoadFn.then(onFinish, onError);
            } else {
                onFinish();
            }
        } catch (error) {
            onError(error);
        }
    });
};
