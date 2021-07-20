'use strict';

const jwt = require('jsonwebtoken');

const AccessTokenManager = require('../../application/security/AccessTokenManager');

const JWT_SECRET_KEY = 'saodjGKJFDOKMSDFne#$%#$%#FSDspkdfmgwdf';

module.exports = {
    generate(payload) {
        return jwt.sign(payload, JWT_SECRET_KEY);
    },

    decode(accessToken) {
        return jwt.verify(accessToken, JWT_SECRET_KEY);
    }
};