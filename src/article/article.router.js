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

article.get('/', async (req, res) => {
     res.send('smoke test');
})

module.exports = article;