const express = require('express');
const path = require('path');
const morgan = require('morgan');
const posts = require('./routes/posts.js');

const app = express();

app.use(morgan('tiny'));
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use('/api/post', posts);

app.listen(3000, () => { console.log('listening on port 3000'); });
