<template>
  <div class="box" v-if="animating">
    <h2>ios</h2>
    <div class="zbox">
      <section>
        <p>A team of tyrants! We are born with I and coexist with beauty!</p>
        <router-link to="/signup">Go to sign up</router-link>
      </section>
      <!-- <div class="phone__webImg">
        <img src="../assets/ios1.png" alt="">
      </div> -->
      <section>
        <p>iOS 开发组现有成员12个。分别来自计科、软件、网络等专业。iOS组配备了 15 台 Mac mini 和 7 台 iMac。是目前实验室设备配置最好，规模最大的开发组。 组成员们利用实验室设备和iOS平台的种种优势，积极进取，共同奋斗。先后开发了 《iXiyou》、《西邮图书馆》、《快递查询》、《生活百事通》、 《微博客户端》、《天气查询系统》等移动应用,并在不断的完善、优化。</p>
      </section>
    </div>
  </div>
  <div class="phone__box" v-else>
    <div class="phone__swipe">
      <mt-swipe :auto="0" :show-indicators='false'>
        <mt-swipe-item class="zswipe">
          <section>
            <h2>ios</h2>
            <p>A team of tyrants! We are born with I and coexist with beauty!</p>
            <router-link to="/signup">Go to sign up</router-link>
          </section>
        </mt-swipe-item>
        <mt-swipe-item class="zswipe">
          <span><h3>现任组长 - 陈普钦</h3></span>
          <div class="phone__info">
            <div class="phone__zinfo">
              <p>iOS 开发组现有成员12个。分别来自计科、软件、网络等专业。iOS组配备了 15 台 Mac mini 和 7 台 iMac。是目前实验室设备配置最好，规模最大的开发组。 组成员们利用实验室设备和iOS平台的种种优势，积极进取，共同奋斗。先后开发了 《iXiyou》、《西邮图书馆》、《快递查询》、《生活百事通》、 《微博客户端》、《天气查询系统》等移动应用,并在不断的完善、优化。</p>
            </div>
          </div>
          <router-link to="admin">Home</router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
  export default {
    name: 'ios',
    data () {
      return {
        animating: true
      }
    },
    mounted () {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
          this.animating = false;
      } else {
          this.animating = true;
      }
    }
  }
</script>

<style lang="less" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  @media screen and(min-width: 750px) {
    .box {
      width: 100%;
      min-width: 1000px;
      // min-height: 100%;
      height: auto;
      .zbox {
        width: 70%; // height: 1000px;
        max-width: 100%;
        margin: 300px auto 100px auto; // background-color: aqua;
        display: flex;
        justify-content: space-around;
        align-items: center;
        section {
          width: 350px;
          height: 300px;
          // margin: 0 auto;
          border: 1px solid red;

          padding-top: 70px;
          h2 {
            font-size: 1em;
          }
          p {
            // padding-bottom: 30px;
            font-weight: 700;
            font-size: 1em;
          }
          a {
            font-size: 1.1em;
            font-weight: 100;
            text-decoration: none;
            color: rgb(77, 117, 248);
          }
          a:hover {
            text-decoration: line-through;
            vertical-align: middle;
            text-align: left;
          }
        }
        .webImg {
          margin: 100px;
        }
        .introduce {
          width: 1200px;
          max-width: 100%;
          margin: 0 auto;
          margin-bottom: 100px;
          p {
            font-size: 1em;
            letter-spacing: 2px;
            line-height: 20px;
            text-align: left;
          }
        }
      }
    }
  }

  @media screen and(max-width: 750px) {
    .phone__box {
      width: 100%;
      max-width: 100%;
      height: 100%;
      // background-color: red;
      .phone__swipe {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .zswipe {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          color: white;
          flex-direction: column;
          span {
            width: 80%;
            text-align: right;
            margin: 0 auto;
            position: relative;
            top: 10px;
            animation: toph3 2s 1s ease;
            h3 {
              font-size: 2rem;
              font-weight: 550;
            }
          }
          @keyframes toph3 {
            0% {
              top: -1000px;
            }
            100% {
              top: 0;
            }
          }
          a {
            font-size: 2rem;
            position: relative;
            top: 40px;
            color: white;
            font-weight: 400;
            animation: bottoma 2s 1s ease;
          }
          @keyframes bottoma {
            0% {
              top: 1000px;
            }
            100% {
              top: 0;
            }
          }
          .phone__info {
            width: 80%;
            max-width: 100%;
            height: auto;
            padding: 50px 0;
            margin: 0 auto;
            // margin-bottom: 100px;
            // border: 1px solid rgb(8, 199, 247);
            border-top: none;
            border-radius: 5rem 0 5rem 0;
            box-shadow: 1px 1px 20px 2px #f3dd95 inset;
            animation: info 2s 1s ease;
            .phone__zinfo {
              width: 100%;
              display: flex;
              justify-content: center;
              p {
                width: 85%;
                color: white;
                font-size: 1.2em;
                letter-spacing: 2px;
                line-height: 17px;
                text-align: left;
                animation: infop 2s 1s ease;
              }
              @keyframes infop {
                0% {
                  // transform: scale3d(0,0,0);
                }
                100% {
                  // transform: scale3d(1.1,1.1,1.1);
                  transform: rotateZ(360deg);
                }
              }
            }
          }
          @keyframes info {
            0% {
              transform: scale3d(0,0,0);
            }
            100% {
              transform: scale3d(1.1,1.1,1.1);
            }
          }
          section {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 300px; // margin: 0 auto;
          // padding-top: 50px;
          height: 200px;
          h2 {
            width: 90%;
            font-size: 3.5rem;
            font-weight: 600;
            position: relative;
            top: 0;
            animation: toph2 2s 0.2s ease;
          }
          @keyframes toph2 {
            0% {
              top: -1000px;
            }
            100% {
              top: 0;
            }
          }
          p {
            // padding-top: 10px;
            // padding-bottom: 10px;
            font-weight: 500;
            font-size: 2rem;
            width: 90%;
            position: relative;
            left: 0;
            animation: leftp 2s 0.2s ease;
          }
          @keyframes leftp {
            0% {
              left:-1000px;
            }
            100% {
              left: 0;
            }
          }
          a {
            width: 90%;
            font-size: 1.5rem;
            font-weight: 100;
            text-decoration: none;
            color: rgb(6, 213, 250);
            position: relative;
            top: 0;
            animation: bottoma 2s 0.2s ease;
          }
          @keyframes bottoma {
            0% {
              top: 1000px;
            }
            100% {
              top: 0;
            }
          }
          a:hover {
            text-decoration: line-through;
            vertical-align: middle;
            text-align: left;
          }
        }
        }
      }
    }
  }
</style>