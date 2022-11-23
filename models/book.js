const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const BookSchema = new Schema({
  title: { type: String, requored: true },
  genre: { type: String, required: true },
  authorId: {
    type: ObjectId,
    ref: "Author",
    required: true,
  },
});

module.exports = mongoose.model("Book", BookSchema);
