// services/userService.js

const User = require("../../models/v1/userdata.model");

const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

const getAllUsers = async () => {
  return await User.find();
};
const getUserByEmails = async (email) => {
  return await User.findOne({ email });
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const updateUser = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmails
};
