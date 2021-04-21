const userRouter = require('express').Router();
const { validateId, validateUpdateCurrentUser } = require('../helpers/validation');
const { getCurrentUser, updateCurrentUser } = require('../controllers/users');

userRouter.get('/users/me', validateId, getCurrentUser);
userRouter.patch('/users/me', validateUpdateCurrentUser, updateCurrentUser);

module.exports = userRouter;
