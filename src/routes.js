module.exports = app => {
     app.use('/article', require('./article/article.router'));
     app.use('/comment', require('./comment/comment.router'));
}