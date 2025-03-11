const Title = require("../models/TitleModel");

module.exports = () => ({
  create: async (data) => {
    return Title.create(data);
  },

  findByID: async (titleID) => {
    return Title.findByPk(titleID);
  },

  findAll: async () => {
    return Title.findAll();
  },

  update: async (titleID, updateData) => {
    return Title.update(updateData, { where: { id: titleID } });
  },

  delete: async (titleID) => {
    return Title.destroy({ where: { id: titleID } });
  }
});
