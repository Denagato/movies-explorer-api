const { USER_SIGNOUT } = require('../../helpers/text-messages');

function signOut(req, res, next) {
  res.clearCookie('jwt').send({ message: USER_SIGNOUT });
  next();
}

module.exports = signOut;
