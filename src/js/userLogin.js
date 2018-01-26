import {Base64} from '../encryption/base64'
const B = new Base64();
import { setCookie } from './cookie'

$(document).ready(function () {
  const checkNumber = function (params) {
    const promise = new Promise(function (resolve, reject) {
        let reg = /^[0-9]+.?[0-9]*$/;
        if (reg.test(params) && params.length == 8) {
          resolve(B.encode(params));
        }
        reject(false);
    }) 
    return promise;
  }

  const checkPassword = function (params) {
    const promise = new Promise(function (resolve, reject) {
      let patrn = /^(\w){6,20}$/;
      if (patrn.exec(params)) {
        resolve(B.encode(params));
      }
      reject(false);
    })
    return promise;
  }

  const checkVercode = function (params) {
    const promise = new Promise(function (resolve, reject) {
      let patrn = /[^\w\.\/]/ig;
      if (!patrn.exec(params) && params.length == 4) {
        resolve(B.encode(params));
      }
      reject(false);
    })
    return promise;
  }

  const userLogin = function (userid, password, vercode) {
    const promise = new Promise(function (resolve, reject) {
      $.ajax({
        type: "GET",
        url: 'http://127.0.0.1:3000/Login',
        dataType: "json",
        xhrFields: { withCredentials: true },
        data: {
          userid: userid,
          password: password,
          vercode: vercode
        },
        success: function (response) {
          resolve(response);
        },
        error: function (err) {
          reject(err);
        }
      });
    })
    return promise;
  }

  $('#button').click(function () {
    // let username = $('#username').val(),
    //     password = $('#password').val(),
    let userid = '04161182',
        password = '521zhuzhu',
        vercode = $('#vercode').val();
    checkNumber(userid).then(function (id) {
      setCookie('userid', B.decode(id), 1);
      checkPassword(password).then(function (pass) {
        checkVercode(vercode).then(function (code) {
          userLogin(id, pass, code).then(function (params) {
            console.log(params);
            $('#name').text(params.result.name);
            setCookie('username', params.result.name, 1);
          }, function (err) {
            alert('登陆错误');
          })
        }, function () {
          alert('验证码格式错误');
        })
      }, function () {
        alert('密码格式错误');
      })
    }, function (data) {
      alert('用户名格式错误');
    })
  })
});
