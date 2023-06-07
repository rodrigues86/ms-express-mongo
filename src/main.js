const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://localhost:27017/rrdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.info('Connected to MongoDB');
});

require('./routes')(app)

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
