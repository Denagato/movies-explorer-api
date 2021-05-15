const bcrypt = require('bcryptjs');

const User = require('../../models/user');
const NoUnique = require('../../errors/no-unique-err');
const { EMAIL_AVAILABLE } = require('../../helpers/text-messages');

function createUser(req, res, next) {
  const {
    email, password, name,
  } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new NoUnique(EMAIL_AVAILABLE);
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => User.create({
      email,
      password: hash,
      name,
    }))
    .then((user) => res.status(200).send(user))
    .catch(next);
}

module.exports = createUser;
