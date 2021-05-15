const NotFoundError = require('../errors/not-found-err');
const { URL_NOT_FOUND } = require('../helpers/text-messages');

function notFound() {
  throw new NotFoundError(URL_NOT_FOUND);
}

module.exports = notFound;
