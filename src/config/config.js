// In a new file config/config.js
const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env];

module.exports = config;
