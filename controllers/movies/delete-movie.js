const Movie = require('../../models/movie');
const NotFoundError = require('../../errors/not-found-err');
const ForbiddenError = require('../../errors/forbidden-err');

const { MOVIE_NOT_FOUND, DELETE_FORBIDDEN, MOVIE_DELETE } = require('../../helpers/text-messages');

function delMovie(req, res, next) {
  const { movieId } = req.params;
  return Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(MOVIE_NOT_FOUND);
      }

      if (req.user._id === String(movie.owner)) {
        return Movie.findByIdAndRemove(movieId);
      }
      throw new ForbiddenError(DELETE_FORBIDDEN);
    })
    .then((movie) => {
      if (movie) {
        return res.status(200).send({ message: `${MOVIE_DELETE}: '${movie.nameRU}'` });
      }
      throw new NotFoundError(MOVIE_NOT_FOUND);
    })
    .catch(next);
}

module.exports = delMovie;
