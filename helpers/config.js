const BD = 'mongodb://localhost:27017/movies-explorer-db';
const PORT_NUMBER = 3000;
const CORS_OPTIONS = {
  origin: [
    'http://denagato.movies.nomoredomains.icu',
    'http://api.denagato.movies.nomoredomains.icu',
    'https://denagato.movies.nomoredomains.icu',
    'https://api.denagato.movies.nomoredomains.icu',
    'http://localhost:3000',
    'http://localhost:3001',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
};

module.exports = { BD, PORT_NUMBER, CORS_OPTIONS };
