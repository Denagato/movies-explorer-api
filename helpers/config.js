const BD = 'mongodb://localhost:27017/movies-explorer-db';
const PORT_NUMBER = 3000;
const CORS_OPTIONS = {
  origin: ['*'],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
};

module.exports = { BD, PORT_NUMBER, CORS_OPTIONS };
