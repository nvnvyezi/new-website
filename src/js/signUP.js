import { getCookie } from './cookie'

$(document).ready(function () {
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

  const userSignUp = function (userData) {
    const promise = new Promise(function (resolve, reject) {
      $.ajax({
        type: "GET",
        url: 'http://127.0.0.1:3000/SignUp',
        dataType: "json",
        xhrFields: { withCredentials: true },
        data: {
          userData
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

  $('#signUp').click(function () {
    let userData = {
      userid: getCookie('userid'),
      username: getCookie('username'),
      sex: $('#gender').val(),
      // phone: $('#phone').val(),
      phone: '18220596362',
      // email: $('#email').val(),
      email: '1187128658@qq.com',
      direction: $('#direction').val(),
      words: $('#words').val()
    };
    if(userData.sex == null || userData.direction == null) {
      alert('性别，方向');
    } else {
      if (userData.phone != '') {
        checkPhone(userData.phone).then(function () {
          if (userData.email != '') {
            checkEmail(userData.email).then(function () {
              if (userData.words != '') {
                checkWords(userData.words).then(function () {
                  userSignUp(userData).then(function (data) {
                    console.log(data);
                  }, function () {
                    alert('报名失败');
                  });
                }, function () {
                  alert("请您不要在参数中输入特殊字符和SQL关键字！");
                })
              } else {
                userSignUp(userData).then(function (data) {
                  console.log(data);
                }, function () {
                  alert('报名失败');
                });
              }
            }, function () {
              alert('请输入正确的邮箱');
            });
          } else {
            userSignUp(userData).then(function (data) {
              console.log(data);
            }, function () {
              alert('报名失败');
            });
          }
        }, function () {
          alert("请输入正确的手机号");
        });
      } else {
        userSignUp(userData).then(function (data) {
          console.log(data);
        }, function () {
          alert('报名失败');
        });
      }
    }
  });
})
