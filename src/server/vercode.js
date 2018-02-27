const express = require('express'),
      request = require('request');

const router = express.Router();

router.get('/', function sendVercode(req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  // res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  res.header("Access-Control-Allow-Origin", "http://193.112.4.143");
  const options = {
    url: "http://222.24.62.120/CheckCode.aspx?",
    method: 'GET',
    encoding: null,
    json: true
  }

  request(options, function (err, response, body) {
    if(err) {
      res.jsonp({ 'state': false, "Err": '验证码出错' });
      res.end();
    };
    if(response.statusCode == 200) {
      body = body.toString('base64');
      // console.log(response.headers['set-cookie'][0]);
      res.cookie('vercode_session', response.headers['set-cookie'][0], { maxAge: 90000, 'signed': true, path: '/', httpOnly: true});
      // console.log(222);
      let result = {
        // 'Cookies': response.headers['set-cookie'][0],
        'VerCode': "data:image/gif;base64," + body
      }
      res.jsonp(result);
      res.end();
    }
  })
})

module.exports = router;
