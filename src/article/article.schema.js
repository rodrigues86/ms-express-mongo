const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
     title: { type: String, required: true},
     body: { type: String, required: true},
     type: { type: String, required: true},
})

const Article = mongoose.model('article', articleSchema);

module.exports = Article;