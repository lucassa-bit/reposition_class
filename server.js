require("dotenv").config();

const mongoose = require("mongoose");
const server = require("./app");

mongoose.connect(process.env.DB_URL_LOCAL).then(() => {
  console.log("DB connected!!!");
});

server.listen(8080, () => {
  console.log("SERVIDOR ON");
});
   