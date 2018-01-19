var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var postSchema = new Schema({
	title: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
	summary: {
		type: String,
		required: true
	},
	url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;