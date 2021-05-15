const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const ForbiddenError = require('../errors/forbidden-err');
const { NOT_AUTHORISATION } = require('../helpers/text-messages');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    throw new ForbiddenError(NOT_AUTHORISATION);
  }

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new ForbiddenError(NOT_AUTHORISATION);
  }

  req.user = payload;
  next();
};
