const jwt = require("jsonwebtoken");

const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

const isTokenMatch = (token) => {
  const isMatch = jwt.verify(token, process.env.JWT_SECRET);
  return isMatch;
};

const attachCookiesToResponse = ({ res, tokenUser }) => {
  const token = createJWT(tokenUser);
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });
};

module.exports = {
  createJWT,
  isTokenMatch,
  attachCookiesToResponse,
};
