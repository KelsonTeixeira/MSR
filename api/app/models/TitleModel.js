  const { DataTypes } = require('sequelize');
  const sequelize = require('../database/connection');
  const Rate = require('./RateModel');
  const User = require('./UserModel');

  const Title = sequelize.define('Title', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'titles',
    timestamps: false
  });

  Title.belongsToMany(User, { through: Rate, foreignKey: 'title_id' });
  User.belongsToMany(Title, { through: Rate, foreignKey: 'user_id' });

  module.exports = Title;
