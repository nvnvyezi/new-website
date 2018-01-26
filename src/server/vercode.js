const express = require('express'),
      request = require('request');

const router = express.Router();

router.get('/', function sendVercode(req, res, next) {
  const options = {
    url: "http://222.24.62.120/CheckCode.aspx?",
    method: 'GET',
    encoding: null,
    json: true
  }

  request(options, function (err, response, body) {
    if(err) throw err;
    if(response.statusCode == 200) {
      body = body.toString('base64');
      let result = {
        'Cookies': response.headers['set-cookie'][0],
        'VerCode': "data:image/gif;base64," + body
      }
      res.jsonp({'state': 'true',result});
      res.end();
    }
  })
})

module.exports = router;
