const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Rate = require('./RateModel');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url_img: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  tableName: 'users',
  timestamps: true
});

User.belongsToMany(Rate, { through: Rate, foreignKey: 'user_id' });

module.exports = User;
