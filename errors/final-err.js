const { SERVER_FAIL } = require('../helpers/text-messages');

const finalErr = (err, req, res, next) => {
  let { statusCode = 500 } = err;
  const { message } = err;

  // если произошла валидация по схеме, ставим статус 400
  if (err.name === 'ValidationError') {
    statusCode = 400;
  }

  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? SERVER_FAIL
        : message,
    });
  next();
};

module.exports = finalErr;
