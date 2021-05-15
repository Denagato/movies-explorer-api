const corsOptions = {
  origin: [
    "http://movies-ialse.students.nomoredomains.rocks",
    "http://www.movies-ialse.students.nomoredomains.rocks",
    "http://api.movies-ialse.students.nomoredomains.rocks",
    "http://www.api.movies-ialse.students.nomoredomains.rocks",
    "https://movies-ialse.students.nomoredomains.rocks",
    "https://www.movies-ialse.students.nomoredomains.rocks",
    "https://api.movies-ialse.students.nomoredomains.rocks",
    "https://www.api.movies-ialse.students.nomoredomains.rocks",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
  ],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ["Content-Type", "origin", "x-access-token"],
  credentials: true,
};

module.exports = { corsOptions };
