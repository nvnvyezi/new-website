<template>
  <div class="box" v-if="animating">
    <div class="carouselBox">
      <div class="carousel">
        <ul>
          <li v-for="(item,index) in carouData" v-show="index===mark" :key="index">
            <img :src="item" alt="index">
          </li>
        </ul>
      </div>
      <div class="floatBox"></div>
      <h2>We <em> are </em> family.</h2>
    </div>
    <!-- <div class="floatBox">
      <h2>We <em> want </em> you .</h2>
    </div> -->
    <div class="android">
      <div class="andBox">
        <div class="andImg">
          <figure>
            <img src="../assets/android1.png" alt="Android" >
          </figure>
        </div>
        <div class="andIntroduce">
          <h2>Android</h2>
          <h3>Our size determines the meaning of our existence.</h3>
          <router-link to="/android">Learn more <span> about Android</span></router-link>
        </div>
      </div>
    </div>
    <div class="android" id="ios">
      <div class="andBox">
        <div class="andImg">
          <figure>
            <img src="../assets/ios1.png" alt="ios">
          </figure>
        </div>
        <div class="andIntroduce">
          <h2>ios</h2>
          <h3>A team of tyrants! We are born with I and coexist with beauty!</h3>
          <router-link to="/android">Learn more <span> about ios</span></router-link>
        </div>
      </div>
    </div>
    <div class="android" id="web">
      <div class="andBox">
        <div class="andImg">
          <figure>
            <img src="../assets/web1.png" alt="Web" >
          </figure>
        </div>
        <div class="andIntroduce">
          <h2>Web</h2>
          <h3>You have us as you have the world……</h3>
          <router-link to="/android">Learn more <span> about Web</span></router-link>
        </div>
      </div>
    </div>
    <div class="android" id="java">
      <div class="andBox">
        <div class="andImg">
          <figure>
            <img src="../assets/java1.png" alt="Java后台" >
          </figure>
        </div>
        <div class="andIntroduce">
          <h2>Java后台</h2>
          <h3>Our size determines the meaning of our existence.</h3>
          <router-link to="/android">Learn more <span> about Java后台</span></router-link>
        </div>
      </div>
    </div>
    <div class="android" id="product">
      <div class="andBox">
        <div class="andImg">
          <figure>
            <img src="../assets/android2.png" alt="" srcset="../assets/android2.png, ../assets/ios.jpg" sizes="(max-width: 360px) 300px, 400px">
          </figure>
        </div>
        <div class="andIntroduce">
          <h2>Product</h2>
          <h3>Our size determines the meaning of our existence.</h3>
          <router-link to="/android">Learn more <span> about Product</span></router-link>
        </div>
      </div>
    </div>
    <div class="group">
      <h2>西邮移动应用开发实验室</h2>
      <figure>
        <div class="webImg">
          <img src="../assets/web2.png" alt="">
        </div>
        <div class="andImg">
          <img src="../assets/android2.png" alt="">
        </div>
        <div class="iosImg">
          <img src="../assets/ios2.png" alt="">
        </div>
        <div class="javaImg">
          <img src="../assets/java2.png" alt="">
        </div>
        <div class="javaImg">
          <img src="../assets/produce2.png" alt="">
        </div>
      </figure>
      <figure id="fig">
        <div class="webImg">
          <span>web</span>
          <p>利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
        </div>
        <div class="andImg">
          <span>Android</span>
          <p>利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
        </div>
        <div class="iosImg">
          <span>ios</span>
          <p>利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
        </div>
        <div class="javaImg">
          <span>Java后台</span>
          <p>利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
        </div>
        <div class="javaImg">
          <span>产品组</span>
          <p>利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
        </div>
      </figure>
      <div class="about">
        <a target="_blank" href="https://www.xiyoumobile.com/">了解我们</a>
      </div>
    </div>
  </div>
  <div v-else class="phone__box" id="android">
    <div class="phone__swipe">
      <mt-swipe :auto="3000">
        <mt-swipe-item>
          <img src="../assets/web.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/ios.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/android.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="phone__abox">
      <div class="phone__aimg">
        <figure>
          <img src="../assets/android1.png" alt="Android" >
        </figure>
      </div>
      <div class="phone__info">
        <h2>Android</h2>
        <h3>Our size determines the meaning of our existence.</h3>
        <router-link to="/android">Learn more <span> about Android</span></router-link>
      </div>
    </div>
    <div class="phone__abox" id="web">
      <div class="phone__aimg">
        <figure>
          <img src="../assets/web1.png" alt="Web" >
        </figure>
      </div>
      <div class="phone__info">
        <h2>Web</h2>
        <h3>You have us as you have the world……</h3>
        <router-link to="/android">Learn more <span> about Web</span></router-link>
      </div>
    </div>
    <div class="phone__abox" id="ios">
      <div class="phone__aimg">
        <figure>
          <img src="../assets/ios1.png" alt="ios" >
        </figure>
      </div>
      <div class="phone__info">
        <h2>ios</h2>
        <h3>A team of tyrants! We are born with I and coexist with beauty!</h3>
        <router-link to="/android">Learn more <span> about ios</span></router-link>
      </div>
    </div>
    <div class="phone__abox" id="java">
      <div class="phone__aimg">
        <figure>
          <img src="../assets/java3.png" alt="Android" >
        </figure>
      </div>
      <div class="phone__info">
        <h2>Java后台</h2>
        <h3>Our size determines the meaning of our existence.</h3>
        <router-link to="/android">Learn more <span> about Java后台</span></router-link>
      </div>
    </div>
    <div class="phone__abox" id="product">
      <div class="phone__aimg">
        <figure>
          <img src="../assets/product4.png" alt="Android" >
        </figure>
      </div>
      <div class="phone__info">
        <h2>Product</h2>
        <h3>Our size determines the meaning of our existence.</h3>
        <router-link to="/android">Learn more <span> about Product</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'home',
  data () {
    return { 
      mark: 0,
      animating: true,
      carouData: [
        require('../assets/android.jpg'),
        require('../assets/ios.jpg'),
        require('../assets/web.jpg'),
      ]
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
    autoPlay () {
      this.mark++;
      if (this.mark === 3) {
        this.mark = 0;
      }
    },
    play () {
      setInterval(this.autoPlay, 2500);
    }
  },
  mounted () {
    this.pcJudge();
    // console.log(this.animating);
  },
  created () {
    this.play()
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.phone__box {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .phone__swipe {
    width: 100%;
    height: 230px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .phone__abox {
    width: 100%;
    height: 200px;
    background-color: rgb(252, 250, 250);
    // justify-content: space-around;
    // align-items: center;
    .phone__aimg {
      width: 30%;
      height: 85px;
      margin: 0 auto;
      padding-top: 5px;
      vertical-align: middle;
      // text-align: left;
      figure {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .phone__info {
      width: 100%;
      height: 160px;
      margin: 5px auto 0 auto;
      h2 {
          font-size: 2rem;
          font-weight: 500;
          line-height: 1rem;
          font-style: normal;
          color: #111;
          letter-spacing: 0.1rem;
          font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        }
        h3 {
          margin-bottom: 10px;
          font-size: 2rem;
          margin-top: .4em;
          line-height: 1.1;
          font-weight: 600;
          letter-spacing: 0em;
          font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        }
        a {
          text-decoration: none;
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 545;
          letter-spacing: -.022em;
          font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
          // background-color: #fff;
          color: #333;
          font-style: normal;
          direction: ltr;
          span::after {
            content: ' ›';
            vertical-align: middle;
            font-weight: 100;
            text-decoration: none;
            // color: red;
          }
        }
        a:hover {
          text-decoration: underline;
        }
    }
  }
}
#ios {
 background-color: #F5FDF1;
 img {
   width: 100%;
 }
}
#web {
  background-color: #FFF1DE;
  // img {
  //   width: 100%;
  // }
}
#java {
  background-color: #E9F7F8;
}
#product {
  background-color: #FCE7E3;
}
.box {
  max-width: 100%;
  overflow-x: hidden;
  width: 100%;
  // overflow: hidden;
  .carouselBox {
    position: relative;
    width: 100%;
    min-width: 1000px;
    .carousel {
      width: 100%;
      position: relative;
      img {
        width: 100%;
        // height: 100vh;
      }
    }
    .floatBox {
      position: absolute;
      width: 100%;
      top: 0;
      opacity: 0.6;
      background-color: black;
      height: 100%;
      // height: auto;
      z-index: 2;
    }
    h2 {
      width: 100%;
      height: auto;
      color: rgb(251, 253, 255);
      position: absolute;
      top: 43%;
      left: 0;
      font-weight: 400;
      font-size: 3em;
      z-index: 4;
    }
  }
  .android {
    width: 100%;
    min-width: 1000px;
    // height: auto;
    max-height: 800px;
    height: 800px;
    // min-height: 80%;
    position: relative;
    // background-color: rgb(253, 253, 253);
    .andBox {
      position: relative;
      max-width: 980px;
      width: 80%;
      height: 100%;
      display: flex;
      direction: rtl;       
      justify-content: space-around;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      // background-color: rgb(212, 212, 238);
      vertical-align: middle;
      .andImg {
        width: 50%;
        // position: relative;
        // left: 50%;
        // top: 30%;
        vertical-align: middle;
        // background-color: blue;
        text-align: left;
        figure {
          width: 100%;
        }
      }
      .andIntroduce {
        vertical-align: middle;
        width: 30%;
        position: relative;
        // top: 100px;
        text-align: left;
        direction: ltr;
        // background-color: red;
        h2 {
          margin-bottom: 20px;
          font-size: 1.5em;
          font-weight: 400;
          line-height: 1.16667;
          font-style: normal;
          color: #111;
          letter-spacing: .009em;
          font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        }
        h3 {
          margin-bottom: 20px;
          font-size: 28px;
          margin-top: .4em;
          line-height: 1.1;
          font-weight: 600;
          letter-spacing: 0em;
          font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        }
        a {
          text-decoration: none;
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 545;
          letter-spacing: -.022em;
          font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
          // background-color: #fff;
          color: #333;
          font-style: normal;
          direction: ltr;
          span::after {
            content: ' ›';
            vertical-align: middle;
            font-weight: 100;
            text-decoration: none;
            // color: red;
          }
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .group {
    width: 100%;
    max-width: 100%;
    min-width: 1000px;
    height: 700px;
    h2 {
      margin-top: 50px;
      letter-spacing: 10px;
      font-size: 28px;
      font-weight: 400;
    }
    figure {
      max-width: 1300px;
      margin: 50px auto;
      width: 1200px;
      // background-color: red;
      display: flex;
      justify-content: space-around;
      align-content: center;
      div {
        width: 130px;
        height: 130px;
        min-width: 180px;
        text-align: left;
        img {
          margin-top: 30px;
          width: 100px;
          height: auto;
          // height: 80px;
          max-height: 300px;
        }
      }
    }
    #fig {
      margin-top: 10px;
      height: 310px;
      // background-color: #333;
      border-bottom: 1px solid rgb(92, 90, 90);
      p {
        padding-top: 20px;
        // padding-right: 5px;
        line-height: 16px;
        font-size: 13px;
      }
    }
    .about{
      width: 1200px;
      height: 30px;
      margin: 0 auto;
      color: black;
      // background-color: red;
      text-align: left;
      a {
        text-decoration: none;
        color: #000;
      }
      a:hover {
        text-decoration: line-through;
      }
    }
  }

  footer {
    width: 100%;
    max-width: 100%;
    min-width: 1000px;
    height: 300px;
    background-color: rgb(242, 242, 242);
    color: rgb(51, 51, 51);
  }
}
</style>
