const { DataTypes, ForeignKeyConstraintError } = require('sequelize');
const sequelize = require('../database/connection');

const Rate = sequelize.define('Rate', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title_id: {
    type: DataTypes.INTEGER,
    foreignKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    foreignKey: true
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  tableName: 'rates',
  timestamps: false
});

module.exports = Rate;
