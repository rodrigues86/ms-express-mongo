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

comment.get('/:id', async (req, res) => {
     try {
          const record = await Comment.findById(req.params.id);
          if (!record) {
               return res.status(404).json({ message: 'Record not found' });
          }
          res.json(record);
     } catch (err) {
          console.error('Error getting record:', err);
          res.status(500).json({ message: 'Internal Server Error' });
     }
})
comment.get('/all', async (req, res) => {
     try {
          const record = await Comment.findAll();
          if (!record) {
               return res.status(404).json({ message: 'Record not found' });
          }
          res.json(record);
     } catch (err) {
          console.error('Error getting record:', err);
          res.status(500).json({ message: 'Internal Server Error' });
     }
})

module.exports = comment;