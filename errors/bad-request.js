const { StatusCodes } = require('http-status-codes');
const customAPIError = require('./custom-api.js');
class BadRequestError extends customAPIError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
