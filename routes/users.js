const router = require('express').Router();

const getUser = require('../controllers/users/get-user');
const updateUser = require('../controllers/users/update-user');
const { validateUpdateUser } = require('../helpers/validation');

router.get('/me', getUser);
router.patch('/me', validateUpdateUser, updateUser);

module.exports = router;
