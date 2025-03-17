require('dotenv').config();

const sequelize = require("sequelize");

const connection = new sequelize('msr_db', 'admin', 'post_password', {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    timezone: process.env.TIMEZONE,
    schema: "msr",
    dialectOptions: {
        multipleStatements: true
    }
});

module.exports = connection;