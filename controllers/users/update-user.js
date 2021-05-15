const User = require('../../models/user');

function updUser(req, res, next) {
  const { email, name } = req.body;

  return User.findByIdAndUpdate(
    req.user._id,
    { email, name },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.status(200).send(user))
    .catch(next);
}

module.exports = updUser;
