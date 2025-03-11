const User = require("../models/UserModel");

module.exports = () => ({
  create: async (data) => {
    return User.create(data);
  },

  findByID: async (userID) => {
    return User.findByPk(userID);
  },

  findAll: async () => {
    return User.findAll();
  },

  update: async (userID, updateData) => {
    return User.update(updateData, { where: { id: userID } });
  },

  delete: async (userID) => {
    return User.destroy({ where: { id: userID } });
  }
});
