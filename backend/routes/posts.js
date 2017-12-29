const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gkak2m7!',
  database: 'blog',
});

connection.connect();



router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res) {
  console.log(req.body.contents);
  res.set({
    'Access-Control-Allow-Origin': '*',
  });
  connection.query('INSERT INTO POSTS(TITLE, CONTENTS) VALUES(?, ?)', [ req.body.title, req.body.contents ]);
  res.send(req.body);
});

module.exports = router;