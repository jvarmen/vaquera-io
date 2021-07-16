'use strict';

const createServer = require('./lib/infrastructure/webserver/server');

const start = async () => {
    try {
        const server = await createServer();
        await server.start();
        console.log(`Servidor iniciado en: ${server.info.uri}`);
    } catch (err) {
        console.log(`Error al iniciar el servidor Vaquera.io: ${err}`)
        process.exit(1)
    }
};

start();