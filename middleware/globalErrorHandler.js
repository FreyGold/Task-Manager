const globalHandler = (err, req, res, next) => {
  return res.status(401).json({ msg: err });
};
module.exports = globalHandler;
