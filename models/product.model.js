const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter product title"],
    unique: true,
  },
  price: Number,
  description: {
    type: String,
    minlength: 50,
  },
  image: String,
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
