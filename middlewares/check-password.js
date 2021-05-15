const ValidateError = require('../errors/validate-err');
const { PASSWORD_EMPTY, PASSWORD_SHORT } = require('../helpers/text-messages');

module.exports = (req, res, next) => {
  const { password } = req.body;

  if (!password || !password.trim()) {
    throw new ValidateError(PASSWORD_EMPTY);
  }

  if (password.trim().length < 8) {
    throw new ValidateError(PASSWORD_SHORT);
  }

  next();
};
