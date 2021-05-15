const router = require('express').Router();

const userRouter = require('./users');
const movieRouter = require('./movies');
const login = require('../controllers/users/login');
const createUser = require('../controllers/users/create-user');
const auth = require('../middlewares/auth');
const checkPassword = require('../middlewares/check-password');
const notFound = require('../controllers/not-found');
const signOut = require('../controllers/users/sign-out');

const { validateCreateUser, validateLogin } = require('../helpers/validation');

router.post('/signin', validateLogin, checkPassword, login);
router.post('/signup', validateCreateUser, checkPassword, createUser);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.post('/signout', signOut);
router.all('/*', notFound);

module.exports = router;
