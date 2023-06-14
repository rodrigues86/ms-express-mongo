const express = require('express');
const Article = require('./article.schema');

const app = express();

app.use(express.json());

const article = express.Router();

article.post('/save', async (req, res) => {
     try {
          const result = new Article(req.body);
          await result.save();
          res.status(201).json(result);
     } catch (err) {
          console.error(err);
     }
})

article.get('/:id', async (req, res) => {
     try {
          const record = await Article.findById(req.params.id);
          if (!record) {
               return res.status(404).json({ message: 'Record not found' });
          }
          res.json(record);
     } catch (err) {
          console.error('Error getting record:', err);
          res.status(500).json({ message: 'Internal Server Error' });
     }
})

article.get('/all', async (req, res) => {
     try {
          const record = await Article.findAll();
          if (!record) {
               return res.status(404).json({ message: 'Record not found' });
          }
          res.json(record);
     } catch (err) {
          console.error('Error getting record:', err);
          res.status(500).json({ message: 'Internal Server Error' });
     }
})

module.exports = article;