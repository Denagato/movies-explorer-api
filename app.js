require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('cors');
const limit = require('./helpers/limit');
const { BD, PORT_NUMBER, CORS_OPTIONS } = require('./helpers/config');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { centralError } = require('./helpers/centralError');
const router = require('./routes/index');

const app = express();

app.use('*', cors(CORS_OPTIONS));

const { PORT = PORT_NUMBER, LINK, NODE_ENV } = process.env;
mongoose.connect(NODE_ENV === 'production' ? LINK : BD, {
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

app.use(centralError);

app.listen(PORT);
