const express = require('express');
const request = require('request');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');

const mysql = require('./mysql');
const Base64 = require('./base64');

const router = express.Router();
const B = new Base64();

router.get('/', function (req, res) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  
  const userData = req.query.userData;
  mysql.sqlFind(userData.userid, function (judge, data) {
    if(judge) {
      if(data[0] != undefined) {
        let result = {
          "Error": true,
          'Result': '你已经报过名啦'
        }
        res.jsonp({ 'state': true, result });
        res.end();
      } else {
        judgeUserdata();
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

  const checkPhone = function (params) {
    const promise = new Promise(function (resolve, reject) {
      let patrn = /^1(3|4|5|7|8)\d{9}$/;
      if (patrn.exec(params)) {
        resolve(true);
      }
      reject(false);
    })
    return promise;
  }

  const checkEmail = function (params) {
    const promise = new Promise(function (resolve, reject) {
      let patrn = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (patrn.exec(params)) {
        resolve(true);
      }
      reject(false);
    })
    return promise;
  }

  const checkWords = function (params) {
    const promise = new Promise(function (resolve, reject) {
      let patrn = /select|update|delete|exec|count|’|"|=|;|>|<|%/i;
      if (!patrn.exec(params)) {
        resolve(true);
      }
      reject(false);
    })
    return promise;
  }

  const crawlingSignUp = function (userData) {
    const session = B.decode(req.cookies.session);
    const promise = new Promise(function (resolve, reject) {
      const options = {
        url: "http://222.24.62.120/xsgrxx.aspx?xh=" + userData.userid + "&xm=" + encodeURI(userData.username) + "&gnmkdm=N121501",
        method: "GET",
        encoding: null,
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, sdch',
          'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
          'Connection': 'keep-alive',
          'Cookie': session,
          'Host': '222.24.62.120',
          'Referer': 'http://222.24.62.120/xs_main.aspx?xh=' + userData.userid,
          'Upgrade-Insecure-Requests': '1',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
        },
      }
      request(options, function (err, response, body) {
        if(err) {
          let result = {
            'Err': true,
            'Result': '服务器请求错误'
          }
          reject(result);
        }
        body = iconv.decode(body, 'GB2312');
        const $ = cheerio.load(body);
        userData.class = $('#lbl_xzb').text();
        userData.sex = $('#lbl_xb').text();
        userData.username = $('#xm').text();
        resolve(userData);
      })
    })
    return promise;
  }

  const linkCrawling = function () {
    crawlingSignUp(userData).then(function (data) {
      mysql.sqlAdd(data, function (boolean, result) {
        if (boolean) {
          let result = {
            "Error": false,
            'Result': '报名成功'
          }
          res.jsonp({ 'state': true, result });
          res.end();
        } else {
          let result = {
            "Error": 'true',
            'Result': '数据库错误，报名失败'
          }
          res.jsonp({ 'state': false, result });
          res.end();
        }
      });
    }, function () {
      let result = {
        "Error": true,
        'Result': '服务器炸了'
      }
      res.jsonp({ 'state': true, result });
      res.end();
    });
  }

  const judgeUserdata = function () {
    if (userData.direction == '') {
      let result = {
        "Error": 'true',
        'Result': '方向'
      }
      res.jsonp({ 'state': false, result });
      res.end();
    } else {
      if (userData.phone != '') {
        checkPhone(userData.phone).then(function () {
          if (userData.email != '') {
            checkEmail(userData.email).then(function () {
              if (userData.words != '') {
                checkWords(userData.words).then(function () {
                  linkCrawling();
                }, function () {
                  let result = {
                    "Error": 'true',
                    'Result': '请您不要在参数中输入特殊字符和SQL关键字！'
                  }
                  res.jsonp({ 'state': false, result });
                  res.end();
                })
              } else {
                linkCrawling();
              }
            }, function () {
              let result = {
                "Error": 'true',
                'Result': '请输入正确的邮箱'
              }
              res.jsonp({ 'state': false, result });
              res.end();
            });
          } else {
            linkCrawling();
          }
        }, function () {
          let result = {
            "Error": 'true',
            'Result': '请输入正确的手机号'
          }
          res.jsonp({ 'state': false, result });
          res.end();
        });
      } else {
        linkCrawling();
      }
    }
  }
})

module.exports = router;
