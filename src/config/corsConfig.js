// config/corsConfig.js
module.exports = {
    options: {
      origin: process.env.CORS_ORIGIN || '*', // Configure the accepted origin
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
  };
  