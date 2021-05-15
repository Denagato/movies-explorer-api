const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const { PORT, DB_CONN } = require('./config');
const router = require('./routes');
const finalErr = require('./errors/final-err');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { corsOptions } = require('./helpers/cors-options');
const limiter = require('./helpers/limiter');

const app = express();

mongoose.connect(DB_CONN, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('*', cors(corsOptions));
app.use(requestLogger);
app.use(limiter);
app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(finalErr);

app.listen(PORT, () => {
  console.log(`Сервер работает. Порт: ${PORT}`);
});
