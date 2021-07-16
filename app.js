const hapi = require('Hapi');
const routes = require('./src/routes');

const server = hapi.server({
    port: 3000,
    host: 'localhost',
    app: {
        name: 'Vaquera.io',
        maxAnimals: 30,
        maxLands: 1, 
    }
});

const runServer = async () => {
    try {
        await server.register(routes);
        await server.start();
    } catch (error) {
        console.log(`Error al iniciar el servidor Vaquera.io: ${error}`)
        process.exit(1)
    }
    console.log(`Servidor iniciado en: ${server.info.uri}`);
}

runServer();