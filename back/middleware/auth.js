const jwt = require('jsonwebtoken');
const tokenConfig = require("../config/tokenConfig.js");

module.exports = (req, res, next) => {
    console.log(req.headers.authorization)
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, tokenConfig.RANDOM_TOKEN_SECRET);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};