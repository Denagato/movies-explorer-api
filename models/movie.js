const mongoose = require("mongoose");
const validator = require("validator");

const movieSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: [true, "Поле обязательно"],
  },
  nameRU: {
    type: String,
    required: [true, "Поле обязательно"],
    minlength: [2, "Минимальная длина 2 символа"],
    maxlength: [150, "Максимальная длина 150 символов"],
  },
  nameEN: {
    type: String,
    required: [true, "Поле обязательно"],
    minlength: [2, "Минимальная длина 2 символа"],
    maxlength: [150, "Максимальная длина 150 символов"],
  },
  description: {
    type: String,
    required: [true, "Поле обязательно"],
    minlength: [2, "Минимальная длина 2 символа"],
    maxlength: [10000, "Максимальная длина 10000 символов"],
  },
  year: {
    type: String,
    required: [true, "Поле обязательно"],
    minlength: [2, "Минимальная длина 2 символа"],
    maxlength: [4, "Максимальная длина 4 символа"],
  },
  director: {
    type: String,
    required: [true, "Поле обязательно"],
    minlength: [2, "Минимальная длина 2 символа"],
    maxlength: [150, "Максимальная длина 150 символов"],
  },
  country: {
    type: String,
    required: [true, "Поле обязательно"],
    minlength: [2, "Минимальная длина 2 символа"],
    maxlength: [150, "Максимальная длина 150 символов"],
  },
  duration: {
    type: Number,
    required: [true, "Поле обязательно"],
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (link) => validator.isURL(link),
      message: "Ссылка некорректная",
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (link) => validator.isURL(link),
      message: "Ссылка некорректная",
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator: (link) => validator.isURL(link),
      message: "Ссылка некорректная",
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("movie", movieSchema);
