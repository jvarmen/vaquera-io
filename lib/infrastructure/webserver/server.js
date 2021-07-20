'use strict';
const Hapi = require('@hapi/hapi');

const createServer = async () => {

    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: 'localhost',
        app: {
            name: 'Agro.io',
            maxAnimals: 30,
            maxLands: 1,
        }
    });

    await server.register([
        require('../../interfaces/routes/animals'),
    ]);

    return server;
}

module.exports = createServer;