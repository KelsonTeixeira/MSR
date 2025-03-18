require('dotenv').config();

const sequelize = require("sequelize");

const connection = new sequelize('msr_db', 'admin', 'post_password', {
    host: process.env.HOST,
    dialect: 'postgres',
    timezone: '-03:00',
    schema: process.env.SCHEMA,
    dialectOptions: {
        multipleStatements: true
    }
});

module.exports = connection;