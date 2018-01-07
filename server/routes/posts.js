const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const router = express.Router();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gkak2m7!',
  database: 'blog',
  timezone: 'UTC',
});

connection.connect((err) => {
  if (err) console.log(err.code, err.fatal);
});

function promiseQuery(...args) {
  return new Promise((resolve, reject) => {
    connection.query(...args, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
  });
  next();
});

router.post('/', (req, res) => {
  promiseQuery('INSERT INTO posts(TITLE, CONTENTS) VALUES(?, ?)', [req.body.title, req.body.contents])
    .then((rows) => { res.send({ id: rows.insertId }); })
    .catch((e) => { console.log(e); });
});

router.get('/list/:id?', (req, res) => {
  let listId = req.params.id || 1;

  if (isNaN(listId)) {
    res.status(404).end('Not found');
  } else {
    listId = parseInt(listId, 10);

    promiseQuery('SELECT id, title, contents, post_date FROM posts ORDER BY ID DESC LIMIT ?, 10', [10 * (listId - 1)])
      .then((rows) => { res.send(rows); })
      .catch((e) => {
        console.log(e);
        res.status(500).end();
      });
  }
});

router.get('/recent', (req, res) => {
  promiseQuery('SELECT * FROM posts ORDER BY ID DESC LIMIT 1')
    .then((rows) => { res.send(rows); })
    .catch((e) => { console.log(e); });
});

router.get('/:id', (req, res) => {
  promiseQuery('SELECT id, title, contents, post_date FROM posts WHERE id = ?', [req.params.id])
    .then((rows) => { res.send(rows); })
    .catch((e) => { console.log(e); });
});

module.exports = router;
