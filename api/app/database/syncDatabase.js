const sequelize = require('./connection');

const syncDatabase = async () => {
  sequelize.sync({ alter: true, logging: false })
    .then(() => console.log('Database & tables synced'))
    .catch((err) => console.error('Sync error:', err));
};

module.exports = syncDatabase;