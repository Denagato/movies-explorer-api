require('dotenv').config();

const {
  PORT = 3000,
  JWT_SECRET = 'develop_key',
  DB_CONN = 'mongodb://localhost:27017/moviesdb',
} = process.env;

module.exports = {
  PORT,
  JWT_SECRET,
  DB_CONN,
};
