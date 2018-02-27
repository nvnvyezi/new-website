const express = require('express');
const request = require('request');
const Base64 = require('./base64');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');
const cookieParser = require('cookie-parser');

const sha1 = require('./sha1');

const B = new Base64();
const router = express.Router();

router.get('/', function (req, res) {
  // res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  res.header("Access-Control-Allow-Origin", "http://193.112.4.143");
  // console.log(req.cookies);
  // console.log(req.signedCookies);
  // res.jsonp({'er': 'er'});
  // res.end();
  const userid = B.decode(req.query.userid);
  const password = B.decode(req.query.password);
  const vercode = B.decode(req.query.vercode);
  const checkNumber = function (params) {
    const promise = new Promise(function (resolve, reject) {
      let reg = /^[0-9]+.?[0-9]*$/;
      if (reg.test(params) && params.length == 8) {
        resolve(true);
      }
      reject(false);
    })
    return promise;
  }

  const checkPassword = function (params) {
    const promise = new Promise(function (resolve, reject) {
      let patrn = /^(\w){6,20}$/;
      if (patrn.exec(params)) {
        resolve(true);
      }
      reject(false);
    })
    return promise;
  }

  const checkVercode = function (params) {
    const promise = new Promise(function (resolve, reject) {
      let patrn = /[^\w\.\/]/ig;
      if (!patrn.exec(params) && params.length == 4) {
        resolve(true);
      }
      reject(false);
    })
    return promise;
  }

  const loginConfirm = function () {
    // console.log(req.signedCookies.vercode_session);
    const session = req.signedCookies.vercode_session;
    // console.log(session);
    const promise = new Promise(function (resolve, reject) {
      const options = {
        url: 'http://222.24.62.120/default2.aspx',
        method: 'POST',
        encoding: null,
        form: {
          '__VIEWSTATE': 'dDwxNTMxMDk5Mzc0Ozs+lYSKnsl/mKGQ7CKkWFJpv0btUa8=',
          'txtUserName': userid,
          'Textbox1': '',
          'TextBox2': password,
          'txtSecretCode': vercode,
          'RadioButtonList1': '%D1%A7%C9%FA',
          'Button1': '',
          'lbLanguage': '',
          'hidPdrs': '',
          'hidsc': ''
        },
        headers: {
          'Host': '222.24.62.120',
          'Connection': 'keep-alive',
          'Cache-Control': 'max-age=0',
          'Origin': 'http://222.24.62.120',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Referer': 'http://222.24.62.120/default2.aspx',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
          'Cookie': session
        }
      }
      request(options, function (err, response, body) {
        if(err) {
          let result = {
            'Err': true,
            'Result': '服务器请求错误'
          }
          reject(result);
        }
        // console.log(body);
        body = iconv.decode(body, "GB2312").toString();
        const successJudge = body.indexOf('Object moved');
        // console.log(body);
        // console.log(successJudge);
        if(successJudge == -1) {
          // const $ = cheerio.load(body);
          const errPassword = body.indexOf('密码不正确');
          if(errPassword != -1) {
            let result = {
              'Err': true,
              'Result': '密码错误'
            }
            reject(result);
          }
          const errVercode = body.indexOf('验证码不正确');
          if(errVercode != -1) {
            let result = {
              'Err': true,
              'Result': '验证码错误'
            }
            // console.log(444);
            reject(result);
          }
        } else {
          // console.log(555);
          resolve(session);
        }
      })
    })
    return promise;
  }

  const infoCrawling = function (session) {
    // console.log(3);
    const promise = new Promise(function (resolve, reject) {
      const options = {
        url: "http://222.24.62.120/xs_main.aspx?xh=" + userid,
        method: "GET",
        encoding: null,
        headers: {
          'Referer': "http://222.24.62.120/default2.aspx",
          'Cookie': session,
        }
      }
      request(options, function (err, response, body) {
        if (err) {
          let result = {
            'Err': true,
            'Result': '服务器请求错误'
          }
          reject(result);
        }
        body = iconv.decode(body, "GB2312");
        const $ = cheerio.load(body);
        // console.log(2);
        if ($('#xhxm').text() == null) {
          let result = {
            'Err': true,
            'Result': '没找到'
          }
          reject(result);
        } else {
            const name = $('#xhxm').text().replace('同学', '');
            // console.log(1);
            // res.cookie({
            //   maxAge: 90000
            // });
            let result = {
              'Err': false,
              'name': name
            };
            resolve(result);
          }
      });
    });
    return promise;
  };

  checkNumber(userid).then(function () {
    checkPassword(password).then(function () {
      checkVercode(vercode).then(function () {
        loginConfirm().then(function (session) {
          // console.log(4);
          infoCrawling(session).then(function (result) {
            const token = sha1.hex_sha1(userid + 'ny');
            req.session.token = token;
            // console.log(req.session);
            // console.log(req.cookies);
            // console.log(req.header.cookies);
            // console.log(req.headers.cookies);
            // var id ='s%3AF9HScsg7kn5_cDgYEEYdKB5DfvLrLLBO.%2BPcCUqZJz6eqK03MYTx%2B7oxnaS2ge7sZLY2aVoZwSBw';
            // console.log(req.session[id]);
            // console.log(req.session);
            res.jsonp(result);
            res.end();
          }, function (err) {
            res.jsonp(err);
            res.end();
          })
        }, function (err) {
          res.jsonp(err);
          res.end();
        })
      }, function () {
        const result = {
          "Error": 'true',
          'Result': 'Vercode格式错误'
        }
        res.jsonp(result);
        res.end();
      })
    }, function () {
      const result = {
        "Error": 'true',
        'Result': 'Password格式错误'
      }
      res.jsonp(result);
      res.end();
    })
  }, function (data) {
    const result = {
      "Error": 'true',
      'Result': 'Username格式错误'
    }
    res.jsonp(result);
    res.end();
  })
})

module.exports = router;
