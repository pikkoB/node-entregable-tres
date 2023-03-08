const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: 'entregable_todos',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ruut',
    dialect: 'postgres',
});


module.exports = db;