const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instockSchema = new Schema({
  warehouse: { type: String },
  qty: { type: Number },
});

const productSchema = new Schema({
  item: { type: String },
  instock: [instockSchema],
});

module.exports = mongoose.model("Product", productSchema);
