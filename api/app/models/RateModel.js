const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Rate = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  COMMENT: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  tableName: 'rates',
  timestamps: true
});

module.exports = Rate;
