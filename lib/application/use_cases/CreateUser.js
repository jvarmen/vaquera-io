'use strict';

const User = require('../../domain/User');

module.exports = (firstName, lastName, address, phone, email, password, { userRepository }) => {
    const user = new User(null, firstName, lastName, address, phone, email, password);
    return userRepository.persist(user);
};