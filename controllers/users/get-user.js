const User = require('../../models/user');
const NotFoundError = require('../../errors/not-found-err');
const { USER_NOT_FOUND } = require('../../helpers/text-messages');

function getUser(req, res, next) {
  return User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(USER_NOT_FOUND);
      }
      return res.status(200).send(user);
    })
    .catch(next);
}

module.exports = getUser;
