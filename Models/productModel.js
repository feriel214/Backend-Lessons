const mongoose = require("mongoose");
const product = new mongoose.Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", product);
