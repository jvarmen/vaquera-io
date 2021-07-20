'use strict';

module.exports = {
    name: 'private',
    version: '1.0.0',
    register: async (server) => {

        server.route([
            {
                method: 'GET',
                path: '/private',
                config: {
                    auth: 'oauth-jwt',
                    handler: (request) => request.auth.credentials.uid,
                    description: 'Private resource',
                    tags: ['api'],
                },
            }
        ]);
    }
};