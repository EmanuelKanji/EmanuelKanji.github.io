require('dotenv').config();

const config = {
  port: process.env.PORT || 10000,  // Puerto de Render
  mongoURI: process.env.MONGO_URI  // URI de MongoDB Atlas
};

module.exports = config;
