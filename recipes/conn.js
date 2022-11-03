require("dotenv").config();

const conn = {
   PORT: process.env.SERVER_PORT || 3000,
   DB : {
	  HOST: process.env.DB_HOST,
	  PORT: process.env.DB_PORT
   }
};

module.exports = conn;
