const express = require('express');

const mysql = require('./mysql');

const router = express.Router();

router.get('/', function (req, res) {
  const id = req.query.id || '04161182';
  let reg = /^[0-9]+.?[0-9]*$/;
  if (reg.test(id) && id.length == 8) {
    mysql.sqlFind(id, function (boolean, data) {
      if (boolean) {
        if (data[0] == undefined) {
          let result = {
            "Error": true,
            'Result': '不存在'
          }
          res.jsonp({ 'state': true, result });
          res.end();
        } else {
          let result = {
            "Error": true,
            'Result': data
          }
          res.jsonp({ 'state': true, result });
          res.end();
        }
      } else {
        let result = {
          "Error": true,
          'Result': '服务器炸了'
        }
        res.jsonp({ 'state': true, result });
        res.end();
      }
    });
  } else {
    let result = {
      "Error": true,
      'Result': 'id Error'
    }
    res.jsonp({ 'state': true, result });
    res.end();
  }
})

module.exports = router;
