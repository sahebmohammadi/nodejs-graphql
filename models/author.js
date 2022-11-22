const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  title: { type: String, required: true },
  age: { type: String, required: true },
});

module.exports = mongoose.model("Author", AuthorSchema);
