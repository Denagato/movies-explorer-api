const router = require('express').Router();
const { validateLogin, validateSignup } = require('../helpers/validation');
const { login, createUser } = require('../controllers/users');

const auth = require('../middlewares/auth');

const userRouter = require('./users');
const moviesRouter = require('./movies');

const NotFound = require('../errors/NotFound');

router.post('/signin', validateLogin, login);
router.post('/signup', validateSignup, createUser);

router.use(auth, userRouter);
router.use(auth, moviesRouter);

router.use('/*', () => {
  throw new NotFound('Запрашиваемый ресурс не найден');
});

module.exports = router;
