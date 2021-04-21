const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    required: true,
    type: String,
    unique: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: 'Email некорректен',
    },
  },
  password: {
    required: true,
    type: String,
    minlength: 8,
    select: false,
    validate: {
      validator(v) {
        return /[a-z0-9]*/i.test(v);
      },
      message: 'Пароль некорректен',
    },
  },
});

// eslint-disable-next-line func-names
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('user', userSchema);
