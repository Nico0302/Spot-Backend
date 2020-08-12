function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.code = 'invalidResource';
  next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    error: process.env.NODE_ENV === 'production'
      ? {
        message: err.message,
        code: err.code
      }
      : {
        message: err.message,
        code: err.code,
        stack: err.stack
      }
  });
}

module.exports = {
  notFound,
  errorHandler
};
