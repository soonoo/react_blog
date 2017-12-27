const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const posts = require('./routes/posts');

app.use('/', express.static(path.join(__dirname, './../frontend/dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.post('/api/post', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, () => console.log('listening on port 3000'));