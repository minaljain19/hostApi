const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mob: {
    type: Number,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  dateOF: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Product", productSchema);
