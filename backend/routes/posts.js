const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gkak2m7!',
  database: 'blog',
});

//connection.connect();

router.post('/post', function(req, res) {
  console.log(req.body);
  res.status(200).send('successssssss');
});
