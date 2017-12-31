const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gkak2m7!',
  database: 'blog',
  timezone: 'UTC',
});

connection.connect((err) => {
  if(err) console.log(err.code, err.fatal);
});

function promiseQuery(...args) {
  return new Promise(function (resolve, reject) {
    connection.query(...args, function (err, rows, fields) {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(function(req, res, next) {
  res.set({
    'Access-Control-Allow-Origin': '*',
  });
  next();
});

router.post('/', function (req, res) {
  promiseQuery('INSERT INTO POSTS(TITLE, CONTENTS) VALUES(?, ?)', [req.body.title, req.body.contents])
    .then(res.status(200).end())
    .catch(e => console.log(e));
});

router.get('/list/:id?', function (req, res) {
  let listId = req.params.id || 1;

  if (isNaN(listId)) {
    res.status(404).end('Not found');
  } else {
    listId = parseInt(listId);

    promiseQuery('SELECT id, title, contents, post_date FROM POSTS ORDER BY ID DESC LIMIT ?, 10', [10 * (listId - 1)])
    .then(rows => {
      rows.map(row => {
        row.post_date = [row.post_date.getFullYear(), row.post_date.getMonth(), row.post_date.getDay()].join('. ');
      });
      return rows;
    })
    .then(rows => res.send(rows))
    .catch(e => console.log(e));
  }
});

router.get('/recent', function(req, res) {
  promiseQuery('SELECT * FROM POSTS ORDER BY ID DESC LIMIT 1')
  .then(rows => res.send(rows))
  .catch(e => console.log(e));
});

router.get('/:id', function(req, res) {
  promiseQuery('SELECT id, title, contents, post_date FROM POSTS WHERE id = ?', [ req.params.id ])
  .then(rows => res.send(rows))
  .catch(e => console.log(e));
});

module.exports = router;
