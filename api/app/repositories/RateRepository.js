const Rate = require("../models/RateModel");

module.exports = () => ({
  create: async (data) => {
    return Rate.create(data);
  },

  findByID: async (rateID) => {
    return Rate.findByPk(rateID);
  },

  findAll: async () => {
    return Rate.findAll();
  },

  findByUserID: async (userID) => {
    return Rate.findAll({
      where: { user_id: userID },
    });
  },

  findByTitleID: async (titleID) => {
    return Rate.findAll({
      where: { title_id: titleID },
    });
  },

  update: async (rateID, updateData) => {
    return Rate.update(updateData, { where: { id: rateID } });
  },

  delete: async (rateID) => {
    return Rate.destroy({ where: { id: rateID } });
  }
});
