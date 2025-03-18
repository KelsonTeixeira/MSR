require('dotenv').config();

const sequelize = require("sequelize");

const connection = new sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres',
    timezone: process.env.TIMEZONE,
    schema: process.env.SCHEMA,
    dialectOptions: {
        multipleStatements: true
    }
});

module.exports = connection;