'use strict';

const AnimalsController = require("../controllers/AnimalsController");

module.exports = {
    name: 'animals',
    version: '1.0.0',
    register: async (server, options) => {
        server.route([
            {
                path: '/',
                method: 'GET',
                handler: AnimalsController.findAnimals,
                options: {
                    description: 'List all animals',
                    tags: ['api'],
                },
            },
            {
                path: '/animals/{id?}',
                method: 'GET',
                handler: AnimalsController.getAnimal,
                options: {
                    description: 'Get a animal by its {id}',
                    tags: ['api'],
                },
            },
            {
                path: '/animals',
                method: 'POST',
                handler: AnimalsController.createAnimal,
                options: {
                    description: 'Create a animal',
                    tags: ['api'],
                },
            },
            {
                path: '/animals/{id}',
                method: 'PUT',
                handler: AnimalsController.editAnimal,
                options: {
                    description: 'Update a animal by its {id}',
                    tags: ['api'],
                },
            },
            {
                path: '/animals/{id}',
                method: 'DELETE',
                handler: AnimalsController.deleteAnimal,
                options: {
                    description: 'Delete a animal',
                    tags: ['api'],
                },
            }
        ]);
    }
}