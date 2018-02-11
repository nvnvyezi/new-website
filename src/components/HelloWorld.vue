<template>
  <div class="back">
    <div id="bg"></div>
    <div class="box">
      <h1 id="h11">登录</h1>
      <form action="/" method="post" id="login_form">
        <input type="text" name="userid" placeholder="Username" id="userid">
        <input type="password" name="password" placeholder="Password" id="password">
        <input type="text" id="vercode" placeholder="Vercode" />
        <img src="" alt='vercode' id='vercodeimg' />
        <input type="button" value="Login" id="button" v-on:click="userLogin" class="button">
      </form>
    </div>
    <div class="skip">
      <span><h2 v-on:click="skipCookie">Skip</h2></span>
    </div>
    <!-- <span id="name"></span>
    <label for="username">userid : </label>
    <input type="text" id="userid" placeholder="请输入用户名" />
    <hr />
    <label for="password">password : </label>
    <input type="password" name="password" id="password" placeholder="请输入密码" />
    <hr />
    <select name="cars" id="gender">
      <option  selected disabled>性别</option>
      <option value="女">女</option>
      <option value="男">男</option>
    </select>
    <hr>
    <label for="phone">phone : </label>
    <input type="text" id="phone" placeholder="请输入手机号" />
    <hr />
    <label for="email">Email : </label>
    <input type="email" name="email" id="email" placeholder="请输入邮箱" />
    <hr>
    <img src="" alt='vercode' id='vercodeimg' />
    <hr />
    <select name="cars" id="direction" >
      <option value="" disabled selected>方向</option>
      <option value="Android">Android</option>
      <option value="ios">ios</option>
      <option value="web">web</option>
      <option value="Java后台">Java后台</option>
    </select>
    <hr>
    <label for="vercode">vercode : </label>
    <input type="text" id="vercode" placeholder="请输入验证码" />
    <hr />
    <label for="words">words : </label>
   <textarea name="words" id="words" cols="50" rows="2" maxlength="500" placeholder="留言"></textarea>
    <hr />
    <input type="button" value="LOGIN" id="button"/>
    <hr />
    <input type="button" value="报名" id="signUp" /> -->
  </div>
</template>

<script>
import $ from 'jquery'
import { setCookie } from '../js/cookie'
import { Base64 } from '../encryption/base64'
import { setInterval } from 'timers';
let B = new Base64();
export default {
  name: 'HelloWorld',
  data () {
    return {
      note: {
        backgroundImage: "url(" + require("../assets/007.jpg") + ")"
      }
    }
  },
  methods: {
    skipCookie () {
      setCookie('username', '12345678', 0.1);
      this.$confirm('你将跳过登陆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.location.href = '/admin';
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
    },
    checkNumber (params) {
      const promise = new Promise(function (resolve, reject) {
          let reg = /^[0-9]+.?[0-9]*$/;
          if (reg.test(params) && params.length == 8) {
            resolve(B.encode(params));
          }
          reject(false);
      }) 
      return promise;
    },
    checkPassword (params) {
      const promise = new Promise(function (resolve, reject) {
        let patrn = /^(\w){6,20}$/;
        if (patrn.exec(params)) {
          resolve(B.encode(params));
        }
        reject(false);
      })
      return promise;
    },
    checkVercode (params) {
      const promise = new Promise(function (resolve, reject) {
        let patrn = /[^\w\.\/]/ig;
        if (!patrn.exec(params) && params.length == 4) {
          resolve(B.encode(params));
        }
        reject(false);
      })
      return promise;
    },
    ajaxLogin (userid, password, vercode) {
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
            if (response.Error) {
              reject(err)
            } else {
              resolve(response);
            }
          },
          error: function (err) {
            reject(err);
          }
        });
      })
      return promise;
    },
    userLogin () {
      let that = this;
      let userid = $('#userid').val(),
          password = $('#password').val(),
          vercode = $('#vercode').val();
      this.checkNumber(userid).then(function (id) {
        setCookie('userid', B.decode(id), 1);
        that.checkPassword(password).then(function (pass) {
          that.checkVercode(vercode).then(function (code) {
            that.ajaxLogin(id, pass, code).then(function (params) {
              // console.log(params);
              that.$notify({
                title: '成功',
                message: '登录成功',
                type: 'success'
              })
              setCookie('username', params.name, 0.1);
              window.location.href = '/admin'
            }, function (err) {
              that.$notify.error({
                title: '错误',
                message: err.Result
              });
            })
          }, function () {
            that.$notify.error({
              title: '错误',
              message: 'Vercode格式错误'
            });
          })
        }, function () {
          that.$notify.error({
            title: '错误',
            message: 'Password格式错误'
          });
        })
      }, function (data) {
        that.$notify.error({
          title: '错误',
          message: 'Username格式错误'
        });
      })
    }
  },
  mounted () {
      $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/Vercode",
      dataType: "json",
      async: true,
      success: function (response) {
        $("#vercodeimg").attr('src', response.result.VerCode);
        const session = B.encode(response.result.Cookies);
        setCookie('session', session, 0.1)
      }
    });
    const bg = $('#bg')
    bg.css('background', "url(" + require("../assets/007.jpg") + ")")
    let count = 1;
    setInterval(function () {
      // console.log(arrImg[count]);
      if (count === 1) {
        bg.css('background', "url(" + require('../assets/011.jpg') + ")")
      }
      if (count === 2) {
        bg.css('background', "url(" + require('../assets/012.jpg') + ")")
      }
      if (count === 3) {
        bg.css('background', "url(" + require('../assets/013.jpg') + ")")
      }
      if (count === 0) {
        bg.css('background', "url(" + require('../assets/007.jpg') + ")")
      }
      bg.css({
          'background-size': '100% 100%',
          'background-attachment': 'fixed',
          'overflow': 'hidden'
        })
      count++
      if (count === 4) {
        count = 0
      }
    }, 4000)
  }
}
</script>

<style lang="less" scoped>
@import '../less/login.less';
  // #userid,
  // #vercode {
  //   animation: id 3s ease;
  // }
  // @keyframes id {
  //   0% {
  //     margin-left: -2000px;
  //   }
  // }
  // #password,
  // #vercodeimg {
  //   animation: pw 3s ease;
  // }
  // @keyframes pw {
  //   0% {
  //     margin-left: 2000px;
  //   }
  // }
  // #button {
  //   animation: bu 3s ease;
  // }
  // @keyframes bu {
  //   0% {
  //     margin-top: 3000px;
  //   }
  // }
  // #h11 {
  //   animation: h11 3s ease;
  // }
  // @keyframes h11 {
  //   0% {
  //     margin-left: -3000px;
  //   }
  // }
  // .box {
  //   animation: login 3s ease;
  // }
  // @keyframes login {
  //   0% {
  //     transform: scale3d(0,0,0) rotateZ(360deg);
  //   }
  // }
  #bg {
    animation: bk 4s ease infinite;
  }
  @keyframes bk {
    0% {
      transform:scale3d(1.2,1.2,1.2);
      overflow: hidden;
    }
    100% {
      transform: scale3d(1,1,1);
      overflow: hidden;
    }
  }
</style>
