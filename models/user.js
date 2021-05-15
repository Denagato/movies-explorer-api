const mongoose = require('mongoose');
const validatorLib = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Поле Email обязательно!'],
    unique: true,
    validate: {
      validator(email) {
        return validatorLib.isEmail(email);
      },
      message: 'Указанный Email некорректный',
    },
  },
  password: {
    type: String,
    required: [true, 'Поле Пароль обязательно!'],
    minlength: [8, 'Минимальная длина 8 символов'],
    select: false,
  },
  name: {
    type: String,
    default: 'Жак-Ив Кусто',
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [30, 'Максимальная длина 30 символов'],
  },
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('user', userSchema);
