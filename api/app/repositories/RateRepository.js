const Rate = require("../models/RateModel");

const rateRepository = {
  create: async (data) => {
    console.log(data)
    return Rate.create(data);
  },

  findByID: async (rateID) => {
    return Rate.findByPk(rateID);
  },

  findAll: async () => {
    return Rate.findAll();
  },

  findByRateID: async (rateID) => {
    return Rate.findAll({
      where: { rate_id: rateID },
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
  },
};

module.exports = rateRepository;
