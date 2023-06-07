const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
     id_article: { type: mongoose.Schema.Types.ObjectId, ref: 'article', required: true},
     email: { type: String, required: true},
     text: { type: String, required: true},
})

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;