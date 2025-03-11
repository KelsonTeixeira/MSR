require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 300;

app.listen(PORT, () => {
  console.log(`API running on port: ${PORT}`);
});
