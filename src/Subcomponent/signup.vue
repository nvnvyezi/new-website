<template>
  <div v-if="animating">
    <figure>
      <div class="webImg">
        <span>web</span>
        <img src="../assets/web1.png" alt="">
      </div>
      <div class="andImg">
        <span>Android</span>
        <img src="../assets/android1.png" alt="">
      </div>
      <div class="iosImg">
        <span>ios</span>
        <img src="../assets/ios1.png" alt="">
      </div>
      <div class="javaImg">
        <span>Java后台</span>
        <img src="../assets/java1.png" alt="">
      </div>
    </figure>
    <hr />
    <div class="form_ajax">
      <h2>快加入你最喜欢的小组吧</h2> 
      <div class="table_box">
        <div class="copy">
          <div class="zcopy">
            <span>姓名：<strong>{{ name }}</strong></span>
            <span>学号：<strong>{{ id }}</strong></span>
            <span>手机号：<strong>{{ phone }}</strong></span>
            <span>邮箱：<strong>{{ email }}</strong></span>
            <span id="word">方向：<strong>{{ direction }}</strong></span>
            <span>留言：<strong>{{ words }}</strong></span>
          </div>
        </div>
        <div class="form_table">
          <div class="zform_table">
            <section>
              <input v-model="phone" type="text" id="phone" placeholder="请输入手机号" />
            </section>
            <section>
            <input v-model="email" type="email" name="email" id="email" placeholder="请输入邮箱" />
            </section>
            <section>
              <div class="dire">
                <el-radio-group v-model="direction">
                  <el-radio :label='"Web"'>Web</el-radio>
                  <el-radio :label='"ios"'>ios</el-radio>
                  <el-radio :label='"Android"'>Android</el-radio>
                  <el-radio :label='"Java后台"'>Java后台</el-radio>
                </el-radio-group>
              </div>
            </section>
            <section>
              <textarea v-model="words" name="words" id="words" cols="50" rows="2" maxlength="500" placeholder="留言"></textarea>
            </section>
            <section>
              <input v-on:click="ajaxSignup" type="button" value="报名" id="signUp" />
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="phone__box">
    <h2>快加入你最喜欢的小组吧</h2> 
    <figure>
      <div class="webImg">
        <span>web</span>
        <img src="../assets/web1.png" alt="">
      </div>
      <div class="andImg">
        <span>Android</span>
        <img src="../assets/android1.png" alt="">
      </div>
      <div class="iosImg">
        <span>ios</span>
        <img src="../assets/ios1.png" alt="">
      </div>
      <div class="javaImg">
        <span>Java后台</span>
        <img src="../assets/java3.png" alt="">
      </div>
    </figure>
    <div class="phone__table">
          <div class="phone__ztable">
            <section>
              <input v-model="phone" type="text" id="phone" placeholder="请输入手机号" />
            </section>
            <section>
            <input v-model="email" type="email" name="email" id="email" placeholder="请输入邮箱" />
            </section>
            <section>
              <div class="dire">
                <el-radio-group v-model="direction">
                  <el-radio :label='"Web"'>Web</el-radio>
                  <el-radio :label='"ios"'>ios</el-radio>
                  <el-radio :label='"Android"'>Android</el-radio>
                  <el-radio :label='"Java后台"'>Java后台</el-radio>
                </el-radio-group>
                <!-- <label><input type="checkbox" name="check1" value="web"/>web</label>
                <input type="checkbox" name="check2"/>
                <input type="checkbox" name="check3"/> -->
              </div>
            </section>
            <section>
              <textarea v-model="words" name="words" id="words" cols="50" rows="2" maxlength="500" placeholder="留言"></textarea>
            </section>
            <section>
              <input v-on:click="ajaxSignup" type="button" value="报名" id="signUp" />
            </section>
          </div>
        </div>
  </div>
</template>

<script>
import { getCookie } from '../js/cookie'
import { unescape } from 'querystring';
import { undecode } from "../js/cookie";
import HelloWorld from '../components/HelloWorld'
export default {
  name: 'signup',
  data () {
    return {
      animating: true,
      name: undecode(getCookie('username')),
      id: getCookie('userid'),
      phone: '',
      email: '',
      direction: '',
      words: ''
    }
  },
  mounted () {
    this.pcJudge();
  },
  methods: {
    pcJudge() {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        this.animating = false;
      } else {
        this.animating = true;
      }
    },
    undecode (str) {
      return unescape(str);
    },
    checkPhone (params) {
      const promise = new Promise(function (resolve, reject) {
        let patrn = /^1(3|4|5|7|8)\d{9}$/;
        if (patrn.exec(params)) {
          resolve(true);
        }
        reject(false);
      })
      return promise;
    },
    checkEmail (params) {
      const promise = new Promise(function (resolve, reject) {
        let patrn = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (patrn.exec(params)) {
          resolve(true);
        }
        reject(false);
      })
      return promise;
    },
    checkWords (params) {
      const promise = new Promise(function (resolve, reject) {
        let patrn = /select|update|delete|exec|count|’|"|=|;|>|<|%/i;
        if (!patrn.exec(params)) {
          resolve(true);
        }
        reject(false);
      })
      return promise;
    },
    userSignUp (userData) {
      const promise = new Promise(function (resolve, reject) {
        $.ajax({
          type: "GET",
          // url: 'http://127.0.0.1:3000/SignUp',
          url: "http://193.112.4.143:3000/SignUp",
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
    },
    handleMessage (userData) {
      let that = this;
      this.userSignUp(userData).then(function (data) {
        // console.log(data);
        // console.log(data.Error);
        if (data.Error) {
          that.$notify.error({
            title: '错误',
            message: data.Result
          });
        } else {
          that.$notify({
            title: '成功',
            message: data.Result,
            type: 'success'
          })
        }
      }, function () {
          that.$notify.error({
            title: '错误',
            message: '报名失败'
          });
        });
    },
    ajaxSignup () {
      const that = this
      let userData = {
        userid: getCookie('userid'),
        username: getCookie('username'),
        sex: "",
        class: '',
        phone: $('#phone').val(),
        email: $('#email').val(),
        direction: this.direction,
        words: $('#words').val(),
        state: '等待结果'
      };
      // console.log(userData);
      if(userData.direction == '') {
        that.$notify.error({
          title: '错误',
          message: '请先选择方向'
        });
      } else {
        if (userData.phone != '') {
          that.checkPhone(userData.phone).then(function () {
            if (userData.email != '') {
              that.checkEmail(userData.email).then(function () {
                if (userData.words != '') {
                  that.checkWords(userData.words).then(function () {
                    that.handleMessage(userData);
                  }, function () {
                    that.$notify.error({
                      title: '错误',
                      message: '请您不要在参数中输入特殊字符和SQL关键字！'
                    });
                  })
                } else {
                  that.handleMessage(userData);
                }
              }, function () {
                that.$notify.error({
                  title: '错误',
                  message: '邮箱格式错误'
                });
              });
            } else {
              that.handleMessage(userData);
            }
          }, function () {
            that.$notify.error({
                title: '错误',
                message: '手机号格式错误'
              });
          });
        } else {
          that.handleMessage(userData);
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.gong {
  width: 600px;
  min-width: 400px;
  height: 500px;
  margin: 20px;
  // float: left;
  // background-color: rgb(209, 240, 241);
}
.form_ajax {
  width: 1400px;
  min-width: 1000px;
  height: 700px;
  min-height: 600px;
  margin: 0 auto;
  // background: rgb(198, 198, 224);
  h2 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 5px;
    padding-top: 40px;
    margin-bottom: 20px;
  }
  .table_box {
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .copy {
      border: 1px solid rgb(134, 132, 132);
      border-radius: 8px;
      .gong;
      display: flex;
      align-items: center;
      .zcopy {
        width: 100%;
        height: 400px;
        display: flex;
        align-items: 30px;
        justify-content: center;
        flex-wrap: wrap;
      }
      span {
        display: flex;
        align-self: center;
        display: inline-block;
        width: 400px;
        min-width: 400px;
        line-height: 40px;
        // background-color: red;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        font-size: 16px;
        font-weight: 500;
        font-family: 'Courier New', Courier, monospace;
        letter-spacing: 2px;
        strong {
          width: 300px;
          height: 40px;
          font-size: 19px;
          font-weight: 400;
          color: rgb(1, 0, 8);
          font-family:'Times New Roman', Times, serif;
          border-bottom: 1px solid rgb(7, 0, 0);
        }
      }
    }
    .form_table {
      border: 1px solid rgb(134, 132, 132);
      border-radius: 8px;
      .gong;
      display: flex;
      align-items: center;
      .zform_table {
        width: 100%;
        height: 400px;
        display: flex;
        align-items: 30px;
        justify-content: center;
        flex-wrap: wrap;
      }
      section {
        display: flex;
        align-self: center;
        display: inline-block;
        width: 400px;
        min-width: 400px;
        line-height: 40px;
        // background-color: red;
        text-align: left;
        input,
        textarea {
          width: 100%;
          line-height: 40px;
          border-radius: 5px;
          color: rgba(12, 6, 1, 0.959);
          font-size: 17px;
          letter-spacing: 2px;
          padding-left: 10px;
          border: 1px solid rgb(161, 159, 159);
        }
        input:focus,
        textarea:focus {
          background-color: rgb(209, 207, 207);
          outline: none;
        }
        input::-webkit-input-placeholder,
        textarea::-webkit-input-placeholder {
          // font-family:'Courier New', Courier, monospace;
          color: rgba(12, 6, 1, 0.959);
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 3px;
          font-weight: 100;
          text-align: center;
        }
        .dire {
          width: 340px;
          margin: 0 auto;
        }
      }
    }
  }
}
@media screen and(min-width: 750px) {
  figure {
    margin-top:100px; 
    max-width: 100%;
    min-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    div {
      width: 20%;
      height: 400px;
      min-width: 180px;
      img {
        margin-top: 30px;
        width: 100%;
        height: auto;
        max-height: 300px;
      }
    }
  }
}
@media screen and(max-width: 750px) {
  figure {
    animation: anfig 2s .5s ease;
    // margin-top:100px;
    max-width: 100%;
    // min-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    background-color: white;
    padding-top: 30px;
    padding-bottom: 10px;
    position: relative;
    div {
      width: 20%;
      height: 120px;
      // min-width: 180px;
      // span {
      //   margin-bottom: 5px;
      // }
      img {
        margin-top: 20px;
        width: 100%;
        height: auto;
        // max-height: 300px;
      }
    }
  }
  @keyframes anfig {
    0% {
      left:-1000px;
    }
    100% {
      left:0;
    }
  }
}
.phone__box {
  width: 100%;
  overflow-x: hidden;
  height: 100%;
  // overflow-y: hidden;
  h2 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 5px;
    padding-top: 40px;
    margin-bottom: 30px;
    animation: anh2 2s .5s ease;
    position: relative;
  }
  @keyframes anh2 {
    0% {
      top:-1000px;
    }
    100% {
      top:0;
    }
  }
}
    .phone__table {
      border-top: 1px solid rgb(134, 132, 132);
      // border-radius: 8px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 340px;
      background-color: white;
      // margin-bottom: 50px;
      // overflow: hidden;
      .phone__ztable {
        width: 90%;
        height: 310px;
        display: flex;
        // margin: 0 auto;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        // overflow: hidden;
      }
      section {
        opacity: 0;
        // display: flex;
        // align-self: center;
        // justify-content: center;
        display: inline-block;
        width: 100%;
        // min-width: 400px;
        line-height: 10px;
        // background-color: red;
        text-align: left;
        position: relative;
        input,
        textarea {
          width: 100%;
          line-height: 38px;
          border-radius: 5px;
          color: rgba(12, 6, 1, 0.959);
          font-size: 1rem;
          letter-spacing: 2px;
          // padding-left: 10px;
          border: 1px solid rgb(161, 159, 159);
        }
        input:focus,
        textarea:focus {
          background-color: rgb(209, 207, 207);
          outline: none;
          padding-left: 10px;
        }
        input::-webkit-input-placeholder,
        textarea::-webkit-input-placeholder {
          // font-family:'Courier New', Courier, monospace;
          color: rgba(12, 6, 1, 0.959);
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: 3px;
          font-weight: 100;
          text-align: center;
        }
        .dire {
          // width: 340px;
          margin: 0 auto;
          .el-radio+.el-radio {
            margin-left: 10px;
          }
        }
      }
    }
	.phone__ztable section:nth-child(1) {animation: sect1 2s .5s ease; animation-fill-mode: forwards;}
	.phone__ztable section:nth-child(2) {animation: sect2 2s .7s ease; animation-fill-mode: forwards;}
	.phone__ztable section:nth-child(3) {animation: sect3 2s .9s ease; animation-fill-mode: forwards;}
	.phone__ztable section:nth-child(4) {animation: sect4 2s 1.1s ease; animation-fill-mode: forwards;}
  .phone__ztable section:nth-child(5) {animation: sect5 2s 1.3s ease; animation-fill-mode: forwards;}
  @keyframes sect1 {
    0% {
      opacity: 0;
      left: 600px;
    }
    100% {
      left:0;
      opacity: 1;
    }
  }
  @keyframes sect2 {
    0% {
      opacity: 0;
      left: 600px;
    }
    100% {
      left:0;
      opacity: 1;
    }
  }
  @keyframes sect3 {
    0% {
      opacity: 0;
      left: 600px;
    }
    100% {
      left:0;
      opacity: 1;
    }
  }
  @keyframes sect4 {
    0% {
      opacity: 0;
      left: 600px;
    }
    100% {
      left:0;
      opacity: 1;
    }
  }
  @keyframes sect5 {
    0% {
      opacity: 0;
      left: 600px;
    }
    100% {
      left:0;
      opacity: 1;
    }
  }
</style>
