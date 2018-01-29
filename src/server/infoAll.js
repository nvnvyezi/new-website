const express = require('express');

const mysql = require('./mysql');

const router = express.Router();

router.get('/', function (req, res) {
  mysql.sqlFindAll(function (boolean, data) {
    if (boolean) {
      let result = {
        "Error": true,
        'Result': data
      }
      res.jsonp({ 'state': true, result });
      res.end();
    } else {
      let result = {
        "Error": true,
        'Result': '服务器炸了'
      }
      res.jsonp({ 'state': true, result });
      res.end();
    }
  });
})

module.exports = router;
