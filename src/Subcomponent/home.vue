<template>
  <div class="box" v-if="animating">
    <div id="navBox">
      <ul>
        <li></li>
        <li>Android</li>
        <li>ios</li>
        <li>Web</li>
        <li>Java后台</li>
        <li>Product</li>
        <li>3G</li>
      </ul>
    </div>
    <div class="bgPhone">
      <div class="zbgPhone">
        <div class="stripe" ></div>
        <div class="stripe2" ></div>
      </div>
    </div>
    <div class="bgPhone">
      <div class="zzbgPhone">
      </div>
    </div>
    <div class="gPhone">
      <div class="zgPhone">
        <!-- <div class="nav">
          ul
        </div> -->
        <div class="ulBox">
          <ul>
            <li class="liimg">
              <img src="../assets/logo.png" alt="">
            </li>
            <li class="glo">
              <span>移动应用开发实验室</span> 
            </li>
            <li>
              <router-link to="/signup"><span>SignUp</span></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="dowebok">
      <div class="section">
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
      </div>
      <div class="section">
        <div class="android" id="android">
          <div class="andBox">
            <figure class="andImg">
              <img src="../assets/android1.png" alt="Android" >
            </figure>
            <section class="h2Box"><h2>Android</h2></section>
            <section class="h3Box">
              <h3><span>现任组长 - 某某某</span> <br> Our size determines the meaning of our existence.</h3>
            </section>
            <section class="pBox">
              <p>利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
            </section>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="android" id="android">
          <div class="andBox">
            <figure class="aandImg">
              <img src="../assets/android1.png" alt="Android" >
            </figure>
            <section class="hh2Box"><h2>Android</h2></section>
            <section class="hh3Box">
              <h3><span>现任组长 - 某某某</span> <br> Our size determines the meaning of our existence.</h3>
            </section>
            <section class="ppBox">
              <p>利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
            </section>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="android" id="android">
          <div class="andBox">
            <figure class="andImg">
              <img src="../assets/android1.png" alt="Android" >
            </figure>
            <section class="h2Box"><h2>Android</h2></section>
            <section class="h3Box">
              <h3><span>现任组长 - 某某某</span> <br> Our size determines the meaning of our existence.</h3>
            </section>
            <section class="pBox">
              <p>利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
            </section>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="android" id="android">
          <div class="andBox">
            <figure class="aandImg">
              <img src="../assets/android1.png" alt="Android" >
            </figure>
            <section class="hh2Box"><h2>Android</h2></section>
            <section class="hh3Box">
              <h3><span>现任组长 - 某某某</span> <br> Our size determines the meaning of our existence.</h3>
            </section>
            <section class="ppBox">
              <p>利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
            </section>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="android" id="android">
          <div class="andBox">
            <figure class="andImg">
              <img src="../assets/android1.png" alt="Android" >
            </figure>
            <section class="h2Box"><h2>Android</h2></section>
            <section class="h3Box">
              <h3><span>现任组长 - 某某某</span> <br> Our size determines the meaning of our existence.</h3>
            </section>
            <section class="pBox">
              <p>利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
            </section>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="android" id="about">
          <div class="andBox">
            <div class="andimg">
              <img src="../assets/ginventory-illu-branch-01-big.png" alt="Android" >
            </div>
            <section class="h2box"><h2>关于我们</h2></section>
            <section class="h3box">
              <h3><span>我们是谁 ? </span> <br>西邮移动应用开发实验室 <br>亦称&nbsp;西邮3G手机应用开发实验室 <br> 最独特·最新潮·最合理·最霸气·最先进</h3>
            </section>
            <section class="pbox">
              <p>西安邮电大学移动应用开发实验室，亦称西安邮电大学3G手机应用开发实验室，创建于2011年，隶属于西安邮电大学计算机学院，专注于目前主流的三大移动平台的应用开发和Web开发，并以服务在校学生、丰富在校学生移动应用为目标，自行设计和开发了多款手机客户端软件以及PC、移动Web服务。实验室针对不同平台和成员兴趣，相应地划分为4个开发小组，包括苹果iOS、谷歌Android、微软Windows（Windows 8 Metro及Windows Phone）和Web小组。实验室以自主学习与共同交流并行的自发式学习方式为主，培养成员的学习兴趣及自主学习能力，努力为每位成员创造最佳的学习环境和学习氛围，为打造一批移动应用开发能手而不断努力！

实验室位于西安邮电大学长安校区东区教学楼一层FZ155教室，西邮IT应用型人才实训中心，是“Google 大学合作部--Android 人才培养示范基地”。实验室内部设有众多移动应用开发设备，包括若干台iMac一体机、Mac Mini以及PC，除此之外，各小组还配备有相关的测试设备，包括iPhone、iPad、iPod Touch、HTC Android智能手机以及Windows Phone 智能手机可供成员测试相关应用程序。Android开发组还配有由公司提供的Android底层开发箱，可用于开发和测试Android底层程序。

实验室已开发多款不同平台的手机应用，包括iOS平台流媒体播放器，Android平台酷步软件，Windows Phone平台通讯中心，以及面向全平台的校园软件iXiyou和校园图书借阅查询系统客户端，实现了西邮图书馆图书随时随地查询借阅。由于成员作品比较多，此处不再一一列举。

实验室每年针对全校所有热爱移动应用开发的同学进行纳新，只要对于移动应用开发感兴趣的同学，欢迎来实验室对纳新事宜进行咨询！</p>
            </section>
          </div>
        </div>
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
import fullpage from '../js/jquery.fullPage' 
import Vue from 'vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  component: 'fullpage',
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
    handleScroll (event) {
      let hei = $(document.body).height();
      let imgHeight = $('.carouselBox').height();
      var scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(hei-imgHeight);
      if (scrolltop > 100) {
        $('#android').addClass('androidMate')
      }
      if (scrolltop > (imgHeight + 100)) {
        $('#ios').addClass('iosMate')
      }
    },
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
    $('#dowebok').fullpage({
      // 'navigation': true,
      // 'navigationPosition': 'right',
      // 'resize': true,
      // 'navigationColor': '#808080',
      // 'navigationTooltips': ['', 'Android', 'ios', 'Web', 'Java后台', 'Product'],
      // 'anchor': ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
      'onLeave': function (index, nextIndex, direction) {
        if(nextIndex == 1) {
          $('.ulBox').css('z-index', '-1');
        }
        if (index == 1 && nextIndex == 2) {
          $('.zzbgPhone').addClass('topMate');
        }
        if (index == 2 && nextIndex == 1) {
          $('.zzbgPhone').removeClass('topMate');
        }
        if (index == 6 && nextIndex == 7) {
          $('.zzbgPhone').removeClass('ttopMate');
          $('.zzbgPhone').addClass('bbottomMate');
        }
        if (index == 7 && nextIndex == 6) {
          $('.zzbgPhone').removeClass('bbottomMate');
          $('.zzbgPhone').addClass('ttopMate');
        }
        if (direction === 'up') {
          if (index == 2 && nextIndex == 1) {
            // $('.stripe').css('display', 'block');
            $('.stripe').removeClass('oddMate');
            $('.stripe2').removeClass('comMate');
            $('.stripe').removeClass('odddMate');
            $('.stripe2').removeClass('commMate');
            $('.stripe').css('z-index', '0');
            $('.stripe2').css('z-index', '-1');
          }
          if (index == 3 && nextIndex == 2) {
            $('.stripe').removeClass('oddMate');
            $('.stripe2').removeClass('comMate');
            $('.stripe2').css('z-index', '0');
            $('.stripe').css('z-index', '-1');
            $('.stripe2').addClass('commMate');
            $('.stripe').removeClass('odddMate');
          }
          if (index == 4 && nextIndex == 3) {
            $('.stripe').removeClass('oddMate');
            $('.stripe2').removeClass('comMate');
            $('.stripe').css('z-index', '0');
            $('.stripe2').css('z-index', '-1');
            $('.stripe2').removeClass('commMate');
            $('.stripe').addClass('odddMate');
          }
          if (index == 5 && nextIndex == 4) {
            $('.stripe').removeClass('oddMate');
            $('.stripe2').removeClass('comMate');
            $('.stripe2').css('z-index', '0');
            $('.stripe').css('z-index', '-1');
            $('.stripe2').addClass('commMate');
            $('.stripe').removeClass('odddMate');
          }
          if (index == 6 && nextIndex == 5) {
            $('.stripe').removeClass('oddMate');
            $('.stripe2').removeClass('comMate');
            $('.stripe').css('z-index', '0');
            $('.stripe2').css('z-index', '-1');
            $('.stripe2').removeClass('commMate');
            $('.stripe').addClass('odddMate');
          }
        }
        if (direction === 'down') {
          if (index == 1 && nextIndex == 2) {
            $('.stripe').removeClass('odddMate');
            $('.stripe2').removeClass('commMate');
            // $('.stripe').css('display', 'block');
            $('.stripe2').css('z-index', '-1');
            $('.stripe').css('z-index', '0');
          }
          if (index == 2 && nextIndex == 3) {
            $('.stripe').removeClass('odddMate');
            $('.stripe2').removeClass('commMate');
            $('.stripe2').css('z-index', '-1');
            $('.stripe').css('z-index', '0');
            $('.stripe').addClass('oddMate');
          }
          if (index == 3 && nextIndex == 4) {
            $('.stripe').removeClass('odddMate');
            $('.stripe2').removeClass('commMate');
            $('.stripe2').css('z-index', '0');
            $('.stripe').css('z-index', '-1');
            $('.stripe').removeClass('oddMate');
            $('.stripe2').addClass('comMate');
          }
          if (index == 4 && nextIndex == 5) {
            $('.stripe').removeClass('odddMate');
            $('.stripe2').removeClass('commMate');
            $('.stripe').css('z-index', '0');
            $('.stripe2').css('z-index', '-1');
            $('.stripe2').removeClass('comMate');
            $('.stripe').addClass('oddMate');
          }
          if (index == 5 && nextIndex == 6) {
            $('.stripe').removeClass('odddMate');
            $('.stripe2').removeClass('commMate');
            $('.stripe2').css('z-index', '0');
            $('.stripe').css('z-index', '-1');
            $('.stripe').removeClass('oddMate');
            $('.stripe2').addClass('comMate');
          }
        }
          if(index == 7 && nextIndex == 6) {
            $('.stripe').addClass('sscaleMate');
          } else {
            $('.stripe').removeClass('sscaleMate');
          }
      },
      'afterLoad': function (anchorLink, index) {
        if (index == 7) {
          $('.stripe').addClass('scaleMate');
          $('.stripe').css('z-index', '0');
          $('.stripe2').css('z-index', '-1');
          $('#about').addClass('sscaleMate')
        } else {
          $('.stripe').removeClass('scaleMate');
          $('#about').removeClass('sscaleMate')
        }
        if (index == 1) {
          $('.ulBox').css('z-index', '-1');
        } else {
          $('.ulBox').css('z-index', '2');
        }
        if(index == 2 || index == 4 || index == 6) {
          $('.h2Box').addClass('gong1')
          $('.h3Box').addClass('gong2')
          $('.pBox').addClass('gong3')
          $('.andImg').addClass('gong4')
        } else {
          $('.h2Box').removeClass('gong1')
          $('.h3Box').removeClass('gong2')
          $('.pBox').removeClass('gong3')
          $('.andImg').removeClass('gong4')
        }
        if(index == 3 || index == 5) {
          $('.hh2Box').addClass('gong11')
          $('.hh3Box').addClass('gong22')
          $('.ppBox').addClass('gong33')
          $('.aandImg').addClass('gong4')
        } else {
          $('.hh2Box').removeClass('gong11')
          $('.hh3Box').removeClass('gong22')
          $('.ppBox').removeClass('gong33')
          $('.aandImg').removeClass('gong4')
        }
      }
    });
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
@media screen and(min-width: 750px) {
  @import '../less/jquery.fullPage.css';
  #about {
    transform: scale3d(0,0,0);
  }
  .androidMate {
    animation: amate 3s ease;
  }
  @keyframes amate {
    50% {
      opacity: 0;
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  .iosMate {
    animation: imate 3s ease;
  }
  @keyframes imate {
    50% {
      opacity: 0;
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
}
@media screen and(max-width: 750px) {
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
      overflow: hidden;
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
}
// #ios {
//  background-color: #F5FDF1;
//  img {
//    width: 100%;
//  }
// }
// #web {
//   background-color: #FFF1DE;
//   // img {
//   //   width: 100%;
//   // }
// }
// #java {
//   background-color: #E9F7F8;
// }
// #product {
//   background-color: #FCE7E3;
// }
@media screen and(min-width: 600px) {
   .box {
  max-width: 100%;
  // overflow-x: hidden;
  width: 100%;
  position: relative;
  #navBox {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    ul {
      width: 60px;
    }
  }
  .gPhone {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .zgPhone {
      // margin: 0 auto;
      width: 90%;
      height: 90%;
      overflow: hidden;
      .ulBox {
        width: 428px;
        height: 60px;
        position: relative;
        top: 0;
        float: right;
        z-index: -1;
        ul {
          display: inline-block;
          li {
            list-style: none;
            width: 130px;
            line-height: 60px;
            display: inline-block;
            background-color: rgb(247, 191, 8);
            vertical-align: top;
            span,
            a {
              color: rgb(207, 73, 6);
            }
            a {
              font-size: 20px;
              list-style: none;
              text-decoration: none;
            }
            a:hover {
              text-decoration: line-through;
            }
          }
        }
        .liimg {
          background: transparent;
          img {
            width: 130px;
            height: 60px;
          }
        }
        .glo {
          width: 160px;
          font-size: 16px;
          padding-left: 1.34px;
          padding-bottom: 3px;
        }
      }
     }
  }
  .bgPhone {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .zzbgPhone {
      width: 390px;
      height: 700px;
      background-image: url('../assets/iPhone.png');
      background-size: 100% 100%;
      position: relative;
      opacity: 2;
    }
    .zbgPhone {
      // margin: 0 auto;
      width: 90%;
      height: 90%;
      overflow: hidden;
      .stripe {
        position: relative;
        top: -5%;
        left: 0;
        width: 100%;
        height: 50vh;
        background-color: #f6cc4c;
      }
      .stripe2 {
        position: relative;
        top: -5%;
        left: 0;
        width: 100%;
        height: 50vh;
        background-color: #f6cc4c;
      }
      background-image: url('../assets/bg1.jpg');
      background-size: 100% 100%;
    }
  }
  .oddMate {
    animation: odd 2s ease;
    animation-fill-mode: forwards;
  }
  @keyframes odd {
    100% {
      transform-origin: center bottom;
      transform: rotateZ(180deg);
      // transform: scaleY(1);
    }
  }
  .comMate {
    animation: oddd 2s ease;
    animation-fill-mode: forwards;
  }
  @keyframes oddd {
    100% {
      transform-origin: center top;
      transform: rotateZ(180deg);
      // transform: scaleY(1);
    }
  }
  .odddMate {
    animation: odddd 2s ease;
    animation-fill-mode: forwards;
  }
  @keyframes odddd {
    100% {
      transform-origin: center bottom;
      transform: rotateZ(-180deg);
      // transform: scaleY(1);
    }
  }
  .commMate {
    animation: odddddd 2s ease;
    animation-fill-mode: forwards;
  }
  @keyframes odddddd {
    100% {
      transform-origin: center top;
      transform: rotateZ(-180deg);
      // transform: scaleY(1);
    }
  }
  .topMate {
    animation: ooddddddd 2s ease;
    animation-fill-mode: forwards;
  }
  @keyframes ooddddddd {
    0% {
      top:1000px;
    }
    100% {
      top:0;
    }
  }
  .ttopMate {
    animation: oooddddddd 2s ease;
    animation-fill-mode: forwards;
  }
  @keyframes oooddddddd {
    0% {
      top:-1000px;
    }
    100% {
      top:0;
    }
  }
  .bbottomMate {
    animation: oooodddddddd 2s ease;
    animation-fill-mode: forwards;
  }
  @keyframes oooodddddddd {
    0% {
      top: 0;
    }
    100% {
      top: -1000px;
    }
  }
  .scaleMate {
    animation: oddddddd 2s ease;
    animation-fill-mode: forwards;
  }
  @keyframes oddddddd {
    100% {
      transform-origin: center top;
      transform: scaleY(4);
      // transform: scaleY(1);
    }
  }
  .sscaleMate {
    animation: soddddddd 2s ease;
    animation-fill-mode: forwards;
  }
  @keyframes soddddddd {
    100% {
      transform-origin: center top;
      transform: scaleY(1);
      // transform: scaleY(1);
    }
  }
  // overflow: hidden;
  .carouselBox {
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 1000px;
    .carousel {
      width: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100vh;
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
      font-size: 13em;
      z-index: 4;
    }
  }
  .android {
    width: 90%;
    min-width: 1000px;
    // height: auto;
    // max-height: 800px;
    height: 90%;
    // min-height: 80%;
    margin: 0 auto;
    position: relative;
    display: flex;
    direction: rtl;       
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    // background-color: rgb(253, 253, 253);
  }
    .andBox {
      position: relative;
      max-width: 400px;
      width: 400px;
      height: 500px;
      display: flex;
      direction: ltr;       
      justify-content: space-around;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      // background-color: rgb(212, 212, 238);
      vertical-align: middle;
      figure {
        width: 200px;
        position: absolute;
        top: 0;
        left: 500px;
        transform: scale3d(0,0,0);
        img {
          width: 100%;
        }
      }
      .aandImg {
        width: 200px;
        position: absolute;
          top: 360px;
          left: 500px;
        transform: scale3d(0,0,0);
        img {
          width: 100%;
        }
      }
      .andimg {
        width: 800px;
        position: absolute;
        top: -400px;
        left: -250px;
        opacity: 0.1;
        img {
          width: 100%;
        }
      }
      .h2box {
          // margin-bottom: 20px;
          position: absolute;
          width: 70px;
          height: auto;
          top: 20px;
          left: -250px;
          font-size: 40px;
          font-weight: 400;
          line-height: 1.16667;
          font-style: normal;
          color: rgb(255, 255, 255);
          // background-color: red;
          letter-spacing: .009em;
          // animation-fill-mode: forwards;
          font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        }
      .ppBox {
        position: absolute;
        top: 0;
        left: 500px;
          width: 250px;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          font-style: normal;
          color: #ffffff;
          letter-spacing: 1px;
          z-index: -1;
          font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        }
        .h2Box {
          // margin-bottom: 20px;
          position: absolute;
          top: 50px;
          left: -320px;
          font-size: 55px;
          font-weight: 400;
          line-height: 1.16667;
          font-style: normal;
          color: rgb(255, 255, 255);
          // background-color: red;
          letter-spacing: .009em;
          z-index: -1;
          // animation-fill-mode: forwards;
          font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        }
        .h3box {
          // margin-bottom: 20px;
          width: 400px;
          left: 300px;
          position: absolute;
          text-align: right;
          top: -10px;
          // margin-top: .4em;
          h3 {
            span {
              margin-bottom: 20px;
              line-height: 70px;
              font-size: 30px;
              color: rgb(99, 97, 99);
            }
            font-size: 20px;
            line-height: 30px;
            font-weight: 600;
            color: rgb(155, 153, 153);
            letter-spacing: 0em;
            font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
          }
        }
        .pbox {
          position: absolute;
          bottom: -90px;
          left: 100px;
          width: 600px;
          font-size: 14px;
          padding: 20px;
          font-weight: 400;
          line-height: 20px;
          font-style: normal;
          color: #a08304;
          box-shadow: 1px 1px 20px rgba(226, 245, 121, 0.829);
          border-radius: 13px;
          text-align: left;
          letter-spacing: 1px;
          font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        }
        .hh2Box {
          // margin-bottom: 20px;
          position: absolute;
          bottom: 30px;
          left: -320px;
          font-size: 55px;
          font-weight: 400;
          line-height: 1.16667;
          font-style: normal;
          color: rgb(255, 255, 255);
          // background-color: red;
          letter-spacing: .009em;
          z-index: -1;
          // animation-fill-mode: forwards;
          font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        }
        .hh3Box {
          // margin-bottom: 20px;
          width: 400px;
          left: -400px;
          position: absolute;
          top: 50px;
          z-index: -1;
          // margin-top: .4em;
          h3 {
            span {
              margin-bottom: 20px;
              line-height: 70px;
              font-size: 21px;
              color: rgb(99, 97, 99);
            }
            font-size: 20px;
            line-height: 1.1;
            font-weight: 600;
            color: rgb(155, 153, 153);
            letter-spacing: 0em;
            font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
          }
        }
        .gong1 {
          animation: h2mate 2s .2s ease;
          animation-fill-mode: forwards;
        }
        @keyframes h2mate {
          0% {
            left:0;
          }
          50% {
            // z-index: 0;
          }
          100% {
            z-index: 0;
            left: -320px;
          }
        }
        .gong11 {
          animation: hh2mate 2s .2s ease;
          animation-fill-mode: forwards;
        }
        @keyframes hh2mate {
          0% {
            left:-2000px;
          }
          50% {
            // z-index: 0;
          }
          100% {
            z-index: 0;
            left: -320px;
          }
        }
        .gong2 {
          animation: h3mate 2s .3s ease;
          animation-fill-mode: forwards;
        }
        @keyframes h3mate {
          0% {
            left:0;
          }
          50% {
            // z-index: 0;
          }
          100% {
            z-index: 0;
            left: -400px;
          }
        }
        .gong3 {
          animation: h2mmate 2s .2s ease;
          animation-fill-mode: forwards;
        }
        @keyframes h2mmate {
          0% {
            left:0;
          }
          50% {
            // z-index: 0;
          }
          100% {
            z-index: 0;
            left: 480px;
          }
        }
        .gong22 {
          animation: hh3mate 2s .3s ease;
          animation-fill-mode: forwards;
        }
        @keyframes hh3mate {
          0% {
            left:-2000px;
          }
          50% {
            // z-index: 0;
          }
          100% {
            z-index: 0;
            left: -400px;
          }
        }
        .gong33 {
          animation: hh2mmate 2s .2s ease;
          animation-fill-mode: forwards;
        }
        @keyframes hh2mmate {
          0% {
            left:2480px;
          }
          50% {
            // z-index: 0;
          }
          100% {
            z-index: 0;
            left: 480px;
          }
        }
        .gong4 {
          animation: h3mmate 2s .3s ease;
          animation-fill-mode: forwards;
        }
        @keyframes h3mmate {
          0% {
            transform: scale3d(0,0,0);
          }
          100% {
            transform: scale3d(1,1,1);
          }
        }
        .h3Box {
          // margin-bottom: 20px;
          width: 400px;
          position: absolute;
          bottom: 30px;
          left: -400px;
          z-index: -1;
          // margin-top: .4em;
          h3 {
            span {
              margin-bottom: 20px;
              line-height: 70px;
              font-size: 21px;
              color: rgb(99, 97, 99);
            }
            font-size: 20px;
            line-height: 1.1;
            font-weight: 600;
            color: rgb(155, 153, 153);
            letter-spacing: 0em;
            font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
          }
        }
        .pBox {
          position: absolute;
          bottom: -90px;
          left: 480px;
          width: 250px;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          font-style: normal;
          color: #ffffff;
          letter-spacing: 1px;
          z-index: -1;
          font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        }
    }
  }

}
 
</style>
