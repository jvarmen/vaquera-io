'use strict';

module.exports = {

    async findAnimals(request, h) {
        return h.response('Hello World').code(200);
    },

    async getAnimal(request, h) {
        const aId = (request.params.id) ? request.params.id : 'Vaca';
        return h.response(`Animal: ${aId}`).code(200);
    },

    async createAnimal(request, h) {
        const newAnimal = {
            name: request.payload.name,
            chapeta: request.payload.chapeta,
            slot: request.payload.slot,
            source: request.payload.source,
            race: request.payload.race,
        };
        return h.response({
            data: newAnimal
        }).type('application/json').code(200);
    },

    async editAnimal(request, h) {
        const newAnimal = {
            name: request.payload.name,
            chapeta: request.payload.chapeta,
            slot: request.payload.slot,
            source: request.payload.source,
            race: request.payload.race,
        };
        return h.response({
            data: newAnimal,
            msg: `Animal ID: ${request.params.id} modificado exitósamente!`
        }).type('application/json').code(200);
    },

    async deleteAnimal(request, h) {
        return h.response({
            msg: `Animal ID: ${request.params.id} eliminado exitósamente!`
        }).type('application/json').code(200);
    }
}