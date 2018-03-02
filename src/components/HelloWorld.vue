<template>
  <div class="back" v-if="animating">
    <div id="bg"></div>
    <div class="box">
      <h1 id="h11">登录</h1>
      <form action="/" method="post" id="login_form">
        <input type="text" name="userid" class="userid" placeholder="Username" id="userid">
        <input type="password" class="password" name="password" placeholder="Password" id="password">
        <input type="text" class="vercode" id="vercode" placeholder="Vercode" />
        <img v-on:click="ajaxVercode" class="vercodeimg" src="" alt='vercode' id='vercodeimg' />
        <input type="button" value="Login" id="button" v-on:click="userLogin" class="button">
      </form>
    </div>
    <div class="skip">
      <span><h2 v-on:click="skipCookie">Skip</h2></span>
    </div>
    <div class="bar">
      <div class="barm">
        <div class="bars">

        </div>
      </div>
    </div>
  </div>
  <div class="cont" v-else>
    <div class="demo">
      <div class="login">
        <!-- <p>Xiyou Mobile 
          <br>
          移动应用开发实验室
        </p> -->
        <div class="login__check"></div>
        <div class="login__form">
          <div class="login__row">
            <svg class="login__icon name svg-icon" viewBox="0 0 20 20">
              <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
            </svg>
            <input type="text" class="login__input name" id="userid" placeholder="Username"/>
          </div>
          <div class="login__row">
            <svg class="login__icon pass svg-icon" viewBox="0 0 20 20">
              <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
            </svg>
            <input type="password" id="password" class="login__input pass" placeholder="Password"/>
          </div>
          <div class="login__row">
            <svg class="login__icon name svg-icon" viewBox="0 0 20 20">
              <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4" />
            </svg>
            <input type="text" class="login__input name" id="vercode" placeholder="Vercode" />
            <section class="loginImg"><img v-on:click="ajaxVercode" src="" alt='vercode' id='vercodeimg' /></section>
          </div>
          <button type="button" class="login__submit" id="button" @click="loginSubmit">登 录</button>
        </div>
        <div class="skip">
          <span><h2 v-on:click="skipLorgin">Skip</h2></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { setCookie } from '../js/cookie'
import { Base64 } from '../encryption/base64'
import { setInterval } from 'timers';
import { MessageBox } from 'mint-ui';
let B = new Base64();
export default {
  name: 'HelloWorld',
  data () {
    return {
      widthScreen: $(document.body).width(),
      animating: true,
      note: {
        backgroundImage: "url(" + require("../assets/007.jpg") + ")"
      }
    }
  },
  methods: {
    pcJudge () {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
          this.animating = false;
      } else {
          this.animating = true;
      }
    },
    skipLorgin () {
      MessageBox.confirm('确定跳过登陆?').then(action => {
        setCookie('username', '12345678', 1);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
    },
    loginSubmit (event) {
      let login = $('#button');
      login.addClass('processing');
      setTimeout(() => {
        this.userLogin();
      }, 1500);
    },
    ajaxVercode () {
      $.ajax({
        type: "GET",
        // url: "http://127.0.0.1:3000/Vercode",
        url: "http://193.112.4.143:3000/Vercode",
        dataType: "json",
        async: true,
        xhrFields: { withCredentials: true },
        success: function (response) {
          $("#vercodeimg").attr('src', response.VerCode);
          // const session = B.encode(response.result.Cookies);
          // setCookie('session', session, 0.1)
        }
      });
    },
    skipCookie () {
      this.$confirm('你将跳过登陆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // window.location.href = '/admin';
          setCookie('username', '12345678', 1);
          window.location.reload();
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
          // url: 'http://127.0.0.1:3000/Login',
          url: "http://193.112.4.143:3000/Login",
          dataType: "json",
          xhrFields: { withCredentials: true },
          data: {
            userid: userid,
            password: password,
            vercode: vercode
          },
          success: function (response) {
            console.log(response);
            if (response.Err) {
              reject(response)
            } else {
              resolve(response);
            }
          },
          error: function (err) {
            console.log(err);
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
              // alert(params.name)
              // console.log(params);
              that.$notify({
                title: '成功',
                message: '登录成功',
                type: 'success'
              })
              setCookie('username', params.name);
              // window.location.href = '/3gNew/admin'
              window.location.reload();
            }, function (err) {
              that.$notify.error({
                title: '错误',
                message: err.Result
              });
              let login = $('#button');
              login.removeClass('processing');
            })
          }, function () {
            that.$notify.error({
              title: '错误',
              message: 'Vercode格式错误'
            });
            let login = $('#button');
            login.removeClass('processing');
          })
        }, function () {
          that.$notify.error({
            title: '错误',
            message: 'Password格式错误'
          });
          let login = $('#button');
          login.removeClass('processing');
        })
      }, function (data) {
        that.$notify.error({
          title: '错误',
          message: 'Username格式错误'
        });
        let login = $('#button');
        login.removeClass('processing');
      })
    }
  },
  mounted () {
      $.ajax({
      type: "GET",
      // url: "http://127.0.0.1:3000/Vercode",
      url: "http://193.112.4.143:3000/Vercode",
      dataType: "json",
      async: true,
      xhrFields: { withCredentials: true },
      success: function (response) {
        // console.log(response);
        $("#vercodeimg").attr('src', response.VerCode);
        // const session = B.encode(response.Cookies);
        // setCookie('vercode_session_id', session)
      }
    });
    this.pcJudge();
    if (this.animating) {
      if (this.widthScreen < 750) {
        this.$message({
          showClose: true,
          message: '请使用手机登录',
          type: 'success'
        });
        // window.location.reload();
      }
    }
    if(this.animating && this.widthScreen > 1000) {
      this.$message({
        showClose: true,
        message: '请使用教务系统账号和密码登录或者点击Skip跳过登陆',
        type: 'success'
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
    if (!this.animating) {
      Toast({
        message: '请使用教务系统账号和密码登录或者点击Skip跳过登陆',
        position: 'top',
        duration: 2000
      });
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (min-width:100px) and (max-width:750px) {
  *, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skip {
  width: 35px;
  line-height: 35px;
  background-color: rgb(92, 88, 88);
  color: rgb(172, 170, 172);
  position: relative;
  border-radius: 50%;
  top: 2rem;
  left: 2rem;
  /* border: 1px solid red; */
}
/* html, body {
  font-size: 62.5%;
  height: 100%;
  overflow: hidden;
}
  html, body {
    font-size: 40%;
  } */

svg {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  overflow: visible;
}

.svg-icon {
  cursor: pointer;
}
.svg-icon path {
  stroke: rgba(255, 255, 255, 0.9);
  fill: none;
  stroke-width: 1;
}

input, button {
  outline: none;
  border: none;
}

.cont {
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url("../assets/fix-pe4.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: auto;
  // background-color: red;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

.demo {
  position: absolute;
  // top: 50%;
  // left: 50%;
  // margin-left: -15rem;
  // margin-top: -26.5rem;
  // width: 30rem;
  // height: 53rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.login {
  position: relative;
  height: 100%;
  // background: -webkit-linear-gradient(top, rgba(214, 205, 245, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
  // background: linear-gradient(to bottom, rgba(212, 203, 248, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
  -webkit-transition: opacity 0.1s, -webkit-transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
          transition: opacity 0.1s, transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
  p {
    font-size: 1rem;
    padding-top: 4rem;
    font-weight: 400;
    color: rgb(250, 235, 199);
  }
}
.login.inactive {
  opacity: 0;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1);
}
.login__check {
  position: absolute;
  top: 16rem;
  left: 13.5rem;
  width: 14rem;
  height: 2.8rem;
  background: #fff;
  -webkit-transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
          transform-origin: 0 100%;
  -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
}
.login__check:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 2.8rem;
  height: 5.2rem;
  background: #fff;
  box-shadow: inset -0.2rem -2rem 2rem rgba(0, 0, 0, 0.2);
}
.login__form {
  position: absolute;
  top: 45%;
  left: 0;
  width: 100%;
  height: 50%;
  padding: 1.5rem 3.5rem;
  text-align: center;
}
.login__row {
  height: 5rem;
  padding-top: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.login__icon {
  margin-bottom: -0.4rem;
  margin-right: 0.5rem;
}
.loginImg {
  width: 50%;
  height: 4rem;
  position: relative;
  top: -3rem;
  left: 12rem;
  // margin-top: 1rem;
  // float: right;
}
.login__icon.name path {
  stroke-dasharray: 73.50196075439453;
  stroke-dashoffset: 73.50196075439453;
  -webkit-animation: animatePath 2s 0.5s forwards;
          animation: animatePath 2s 0.5s forwards;
}
.login__icon.pass path {
  stroke-dasharray: 92.10662841796875;
  stroke-dashoffset: 92.10662841796875;
  -webkit-animation: animatePath 2s 0.5s forwards;
          animation: animatePath 2s 0.5s forwards;
}
.login__input {
  display: inline-block;
  width: 85%;
  height: 100%;
  padding-left: 1.5rem;
  font-size: 1.5rem;
  background: transparent;
  color: #FDFCFD;
}
// #vercode {
//   width: 83%;
// }
.login__submit {
  position: relative;
  width: 100%;
  height: 4rem;
  bottom: 1.5rem;
  margin: 5rem 0 2.2rem;
  color: rgba(255, 255, 255, 0.8);
  background: #FF3366;
  font-size: 1.5rem;
  border-radius: 3rem;
  cursor: pointer;
  overflow: hidden;
  -webkit-transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
          transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
}

.login__submit:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -1.5rem;
  margin-top: -1.5rem;
  width: 3rem;
  height: 3rem;
  border: 2px dotted #fff;
  border-radius: 50%;
  border-left: none;
  border-bottom: none;
  -webkit-animation: rotate 0.5s infinite linear;
          animation: rotate 0.5s infinite linear;
  -webkit-transition: opacity 0.1s 0.4s;
          transition: opacity 0.1s 0.4s;
  opacity: 0;
}
.login__submit.processing {
  width: 4rem;
  font-size: 0;
}
.login__submit.processing:after {
  opacity: 1;
}
.login__submit.success {
  -webkit-transition: -webkit-transform 0.3s 0.1s ease-out, opacity 0.1s 0.3s, background-color 0.1s 0.3s;
          transition: transform 0.3s 0.1s ease-out, opacity 0.1s 0.3s, background-color 0.1s 0.3s;
  -webkit-transform: scale(30);
      -ms-transform: scale(30);
          transform: scale(30);
  opacity: 0.9;
}
.login__submit.success:after {
  -webkit-transition: opacity 0.1s 0s;
          transition: opacity 0.1s 0s;
  opacity: 0;
}
.login__signup {
  font-size: 1.2rem;
  color: #ABA8AE;
}
.login__signup a {
  color: #fff;
  cursor: pointer;
}

.ripple {
  position: absolute;
  width: 15rem;
  height: 15rem;
  margin-left: -7.5rem;
  margin-top: -7.5rem;
  background: rgba(0, 0, 0, 0.4);
  -webkit-transform: scale(0);
      -ms-transform: scale(0);
          transform: scale(0);
  -webkit-animation: animRipple 0.4s;
          animation: animRipple 0.4s;
  border-radius: 50%;
}

@-webkit-keyframes animRipple {
  to {
    -webkit-transform: scale(3.5);
            transform: scale(3.5);
    opacity: 0;
  }
}

@keyframes animRipple {
  to {
    -webkit-transform: scale(3.5);
            transform: scale(3.5);
    opacity: 0;
  }
}
@-webkit-keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@-webkit-keyframes animatePath {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes animatePath {
  to {
    stroke-dashoffset: 0;
  }
}
}
@media screen and (min-width: 750px) {
  input::-webkit-input-placeholder {
      color: rgba(1, 14, 26, 0.733);
      font-weight: 100;
      text-align: center;
    }
}
@import '../less/login.less';
.bar {
  width: 80px;
  position: absolute;
  bottom: 45px;
  left: 50%;
  margin-left: -40px;
  z-index: 2;
  height: 4px;
  // background-color: red;
  overflow: hidden;
  .barm {
    position: relative;
    z-index: 3;
    top: 0;
    left: -100px;
    width: 300px;
    height: 3px;
    // background-color: rgb(12, 131, 42);
    .bars {
      width: 100px;
      height: 2px;
      background-color: rgb(0, 0, 12);
      position: relative;
      animation: barMove 3s linear infinite;
    }
  }
}
@keyframes barMove {
  0% {
    left: 0; 
  }
  // 50% {
  //   left: 200px;
  // }
  100% {
    left: 300px;
  }
}
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
