const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

getAllUsers = async (req, res) => {
  const users = await User.find({ role: "user" }).select("-password");
  res.status(StatusCodes.OK).json({ users });
};

getSingleUser = async (req, res) => {
  res.send("Get Single User");
};

showCurrentUser = async (req, res) => {
  res.send("Show Current User");
};

updateUser = async (req, res) => {
  res.send("Update User");
};

updateUserPassword = async (req, res) => {
  res.send("Update User Password");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
