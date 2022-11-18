const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  item: { type: String },
  qty: { type: Number },
  tags: [{ type: String }],
  dim_cm: [{ type: Number }],
});

module.exports = mongoose.model("Inventory", inventorySchema);
