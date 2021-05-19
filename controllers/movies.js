const Movie = require('../models/movie');

const NotFound = require('../errors/NotFound');
const Conflict = require('../errors/Conflict');
const Forbidden = require('../errors/Forbidden');

const getMovies = (req, res, next) => {
  const owner = req.user._id;

  Movie.find({ owner })
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      throw new NotFound(err.message);
    })
    .catch(next);
};

const createMovie = (req, res, next) => {
  const {
    movieId,
    nameRU,
    nameEN,
    description,
    year,
    director,
    country,
    duration,
    image,
    thumbnail,
    trailer,
  } = req.body;

  return Movie.findOne({ movieId, owner: req.user._id })
    .then((movie) => {
      if (movie) {
        throw new Conflict('Проблема');
      }
      return Movie.create({
        movieId,
        nameRU,
        nameEN,
        description,
        year,
        director,
        country,
        duration,
        image,
        thumbnail,
        trailer,
        owner: req.user._id,
      });
    })
    .then((movie) => {
      const { _id } = movie;
      return Movie.findById({ _id }).populate('owner');
    })
    .then((movie) => res.status(200).send(movie))
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  const owner = req.user._id;
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFound('Нет фильма с таким id');
      }
      if (movie.owner.toString() !== owner) {
        throw new Forbidden('Невозможно удалить фильм');
      } else {
        Movie.findByIdAndDelete(movieId)
          .then((deletedMovie) => {
            res.status(200).send({ data: deletedMovie });
          })
          .catch(next);
      }
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
