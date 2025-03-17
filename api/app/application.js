require("dotenv").config();

const express = require("express");

const syncDatabase = require('./database/syncDatabase');

const PORT = process.env.PORT || 3001;

const routes = require('./routes/Routes');

const app = express();

app.use(express.json());
app.use('', routes);

syncDatabase();

app.listen(PORT, () => {
  console.log(`API running on port: ${PORT}`);
});
