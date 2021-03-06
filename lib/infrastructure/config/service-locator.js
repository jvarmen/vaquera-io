'use strict';

const constants = require('./constants');
const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const UserSerializer = require('../interfaces/serializers/UserSerializer');

function buildBeans(){
    
    const beans = {
        accessTokenManager: new JwtAccessTokenManager(),
        userSerializer: new UserSerializer(),
    }

    if(environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY){
        const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
        beans.UserRepository = new UserRepositoryInMemory();
    }else if(environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO){
        const UserRepositoryMongo = require('../repositories/UserRepositoryMongo');
        beans.UserRepository = new UserRepositoryMongo();
    } else {
        const UserRepositorySQLite = require('../repositories/UserRepositorySQLite');
        beans.UserRepository = new UserRepositorySQLite();
    }

    return beans;
}

module.exports = buildBeans();