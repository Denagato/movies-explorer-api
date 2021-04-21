const moviesRouter = require('express').Router();
const { validateCreateMovie, validateDeleteMovie } = require('../helpers/validation');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

moviesRouter.get('/movies', getMovies);
moviesRouter.post('/movies', validateCreateMovie, createMovie);
moviesRouter.delete('/movies/:movieId', validateDeleteMovie, deleteMovie);

module.exports = moviesRouter;
