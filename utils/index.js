const { createJWT, isTokenMatch, attachCookiesToResponse } = require("./jwt");
const createTokenUser = require("./createTokenUser");

module.exports = {
  createTokenUser,
  attachCookiesToResponse,
};
