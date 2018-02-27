const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const login = require('./login.js');
const vercode = require('./vercode.js');
const signUp = require('./signUp');
const infoOne = require('./infoOne');

const app = express();

app.use(cookieParser('nvnvyezi'));
app.use(session({
  secret: 'nvnvyezi',
  name: 'session_ny',
  cookie: {
    maxAge: 900000,
    httpOnly: true,
    path: '/'
  },
  sameSite: 'Lax',
  resave: true,
  rolling: true,
  saveUninitialized: false
}));

//  创建cookie
        // res.cookie('token', 'tokensession', {
        //   // 'MaxAge': 90000,
        //   'signed': true,
        //   // 'path': '/',
        //   'httpOnly': true,
        //   // domain: ''
        //   // expires: new Date(Date.now() + 90000)
        // });

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/Vercode', vercode);
app.use('/Login', login);
app.use('/SignUp', signUp);
app.use('/infoOne', infoOne);

app.listen(3000, function (params) {
  console.log('3000 is ready');  
});