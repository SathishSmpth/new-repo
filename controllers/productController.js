const Product = require("../models/product.model");
const asyncCatch = require("../utils/asyncCatch");

exports.getAllProducts = asyncCatch(async (req, res, next) => {
  const product = await Product.find();
  res.status(200).json({
    status: "success",
    results: product.length,
    data: product,
  });
});

exports.registerNewProduct = asyncCatch(async (req, res, next) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json({
    status: "Success",
    data: newProduct,
  });
});

exports.getAProduct = asyncCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: product,
  });
});

exports.updateProduct = asyncCatch(async (req, res, next) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    status: "Success",
    data: updateUser,
  });
});

exports.deleteProduct = asyncCatch(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
  });
});
