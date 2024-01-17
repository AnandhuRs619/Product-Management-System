const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  parent: {
    type: Boolean,
    default: false,
  },
  subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  
});

const Category = mongoose.model("Category", categorySchema);

module.exports = {
  Category,
};
