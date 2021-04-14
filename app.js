require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('cors');
const { corsOptions } = require('./helpers/corsOptions');

const limit = require('./helpers/limit');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const router = require('./routes/index');

const app = express();

app.use('*', cors(corsOptions));

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/movies-explorer-db', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(helmet());

app.use(limit);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/', router);

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
  next();
});

app.listen(PORT);
