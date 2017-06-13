var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: String,
	url: String
},
{timestamps: true})

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;
