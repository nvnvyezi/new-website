const express = require('express');

const mysql = require('./mysql');

const router = express.Router();

router.get('/', function (req, res) {
  // res.header("Access-Control-Allow-Origin", "http://193.112.4.143");
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1");
  const id = req.query.userData;
  const jtoken = sha1.hex_sha1(userData.userid + 'ny');
  if (req.session.token !== jtoken) {
    let result = {
      "Error": true,
      'Result': '请先登录'
    }
    res.jsonp(result);
    res.end();
  } else {
    let reg = /^[0-9]+.?[0-9]*$/;
    if (reg.test(id) && id.length == 8) {
      mysql.sqlFind(id, function (boolean, data) {
        if (boolean) {
          if (data[0] == undefined) {
            let result = {
              "Error": true,
              'Result': '不存在'
            }
            res.jsonp(result);
            res.end();
          } else {
            let result = {
              "Error": false,
              'Result': data
            }
            res.jsonp(result);
            res.end();
          }
        } else {
          let result = {
            "Error": true,
            'Result': '服务器炸了'
          }
          res.jsonp(result);
          res.end();
        }
      });
    } else {
      let result = {
        "Error": true,
        'Result': 'id Error'
      }
      res.jsonp(result);
      res.end();
    }
  }
})

module.exports = router;
