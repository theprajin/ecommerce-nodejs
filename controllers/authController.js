const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { createTokenUser, attachCookiesToResponse } = require("../utils/");

// REGISTER USERS
const register = async (req, res) => {
  const { name, password, email } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email Already Exists");
  }

  const isFirstUser = (await User.countDocuments()) === 0;
  const role = isFirstUser ? "admin" : "user";

  const user = await User.create({ name, email, password, role });

  //creates a payload
  const tokenUser = createTokenUser(user);

  // attach token to http-only cookie
  attachCookiesToResponse({ res, tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

// LOGIN USERS
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError.BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  res.send("login");
};

// LOGOUT USERS
const logout = async (req, res) => {
  res.send("logout");
};

module.exports = {
  register,
  login,
  logout,
};
