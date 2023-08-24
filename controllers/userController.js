const User = require("../models/user.model");
const asyncCatch = require("../utils/asyncCatch");

exports.getAllUsers = asyncCatch(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: users,
  });
});

exports.signUp = asyncCatch(async (req, res, next) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json({
    status: "Success",
    data: newUser,
  });
});

exports.getUser = asyncCatch(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: user,
  });
});

exports.updateMe = asyncCatch(async (req, res, next) => {
  const updateUser = await User.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    status: "Success",
    data: updateUser,
  });
});

exports.deleteMe = asyncCatch(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
  });
});
