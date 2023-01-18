const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: { type: String, required: true },
  tag: { type: String, required: true },
  location: { type: String, required: true },
  hashtag: { type: String, required: true },
  pic: { type: String },
});

module.exports = mongoose.model("Novica", PostSchema);
