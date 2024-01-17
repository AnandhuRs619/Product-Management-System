const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId, // Update to ObjectId type
    ref: 'Category', // Reference to the 'Category' model
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, // Update to ObjectId type
    ref: 'Category', // Reference to the 'Category' model
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  imagePath: {
    type: [String],
    required: true,
  },
});

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
