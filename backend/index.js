const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const posts = require('./routes/posts.js');


app.use('/', express.static(path.join(__dirname, './../frontend/dist')));
app.use('/api/post', posts);

app.listen(3000, () => console.log('listening on port 3000'));