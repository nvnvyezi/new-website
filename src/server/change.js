const express = require('express');

const mysql = require('./mysql');

const router = express.Router();

router.get('/', function (req, res) {
  const Data = {
    id: '04161182',
    state: '通过'
  }
  let reg = /^[0-9]+.?[0-9]*$/;
  if (reg.test(Data.id) && Data.id.length == 8) {
    mysql.sqlFind(Data.id, function (boolean, data) {
      if (boolean) {
        if (data[0] == undefined) {
          let result = {
            "Error": true,
            'Result': '不存在'
          }
          res.jsonp({ 'state': true, result });
          res.end();
        } else {
          mysql.sqlChange(Data, function (bool, resu) {
            if(bool) {
              let result = {
                "Error": false,
                'Result': resu
              }
              res.jsonp({ 'state': true, result });
              res.end();
            } else {
              let result = {
                "Error": true,
                'Result': '数据库错误'
              }
              res.jsonp({ 'state': true, result });
              res.end();
            }
          })
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