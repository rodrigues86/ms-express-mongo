const Comment = require('./comment.schema');
const express = require('express');
const app = express();

app.use(express.json());

const comment = express.Router();

comment.post('/comment', async (req, res) => {
     try {
          const result = new Comment(req.body);
          await result.save();
          res.status(201).json(result);
     } catch (err) {
          console.error(err);
     }
})

module.exports = comment;