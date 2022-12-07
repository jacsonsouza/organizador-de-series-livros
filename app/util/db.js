'use strict';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user', 'jacson-souza', '428537', {
  host: 'localhost',
  dialect: 'mariadb',
});

try {
  sequelize.authenticate();
  console.log('Conectado com o sequilize');
} catch (error) {
  console.log('Não foi possível conectar: ', error);
}

module.exports = sequelize;
