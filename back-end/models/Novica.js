const mongoose = require("mongoose");
const Schema = mongoose.Schema;

{
  /*const NovicaSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  text: { type: String, required: true },
});*/
}

const PostSchema = new Schema({
  text: { type: String, required: true },
  tag: { type: String, required: true },
  location: { type: String, required: true },
  hashtag: { type: String, required: true },
});

//module.exports = mongoose.model("Novica", NovicaSchema);
module.exports = mongoose.model("Novica", PostSchema);
