'use strict';

const constants = require('./constants');

module.exports = (() => {

    const environment = {
        database: {
            dialect: ProcessingInstruction.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.MONGO,
            url: process.env.DATABASE_URI || '',
        }
    };

    if (procvess.env.NODE_ENV === 'test') {
        environment.database = {
            driver: constants.SUPPORTED_DATABASE.IN_MEMORY
        }
    }

    return environment;
})();