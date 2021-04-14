const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 150,
  },
  director: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 150,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 4,
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 10000,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (link) => validator.isURL(link),
      message: 'Ссылка некорректная',
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator: (link) => validator.isURL(link),
      message: 'Ссылка некорректная',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (link) => validator.isURL(link),
      message: 'Ссылка некорректная',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 150,
  },
  nameEN: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 150,
  },
});

module.exports = mongoose.model('movie', movieSchema);
