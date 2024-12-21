const logger = (req, res, next) => {
  console.log(`[Logger]: ${req.method} ${req.url}`);
  next();
};

module.exports = logger;
