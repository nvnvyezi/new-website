<template>
  <div class="box" v-if="animating">
    <!-- <header>
      <div class="navigation">
        <ul>
          <li>
            <span>3g</span>
          </li>
          <li>
            <router-link to="admin">Home</router-link>
          </li>
          <li>
            <router-link to="web" >Web</router-link>
          </li>
          <li>
            <router-link to="ios">ios</router-link>
          </li>
          <li>
            <router-link to="android">Android</router-link>
          </li>
          <li>
            <router-link to="Java">Java后台</router-link>
          </li>
          <li>
            <router-link to="product">产品</router-link>
          </li>
          <li>
            <span @click="query">查询状态</span>
          </li>
          <li>
            <router-link to="signup">SignUp</router-link>
          </li>
          <li>
          </li>
          <li v-if="judge">
            <span v-on:click="delLogin">Login</span>
          </li>
          <li v-else>
            <span v-on:click="delLogin">{{ name }}</span>
          </li>
        </ul>
      </div>
    </header> -->
    <transition :name="tsname" mode="">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <footer>
      <div class="fbox">
        <div class="logo">
          <div class="logoImg">
            <a href="https://www.xiyoumobile.com/" target="_blank">
              <img src="../assets/logo1.png" alt="">
            </a>
          </div>
          <div class="logop">
            <p>Copyright © 2018 西安邮电大学移动开发应用实验室 All rights reserved</p>
          </div>
        </div>      
        <div class="info">
          <div class="infobox">
            <h3>关注我们</h3>
            <div class="blog">
              <span>新浪微博：</span>
              <a target="_blank" href="https://weibo.com/xiyoumobile?from=myfollow_no-group">@西邮移动应用开发实验室</a>
            </div>
            <div class="talk">
              <span>交流 QQ ： 315602317</span>
            </div>
            <div class="er">
              <span>官方微信： </span>
              <img v-on:mousemove="show" v-on:mouseleave="remove" src="../assets/about_footer_code.png" alt="">
              <img id="erblock" src="../assets/wxqr.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <div id="wrapper" v-else>
		<div class="mobile">
			<!-- Checkbox to toggle the menu -->
			<input type="checkbox" id="tm" />
			<!-- The menu -->
			<ul class="sidenav" @click="aaa">
				<li><router-link to="admin"><i class="fa fa-check"></i><b>Home</b></router-link></li>
				<li><router-link to="web"><i class="fa fa-twitter"></i><b>Web</b></router-link></li>
				<li><router-link to="ios"><i class="fa fa-pencil"></i><b>ios</b></router-link></li>
				<li><router-link to="android"><i class="fa fa-eye"></i><b>Android</b></router-link></li>
				<li><router-link to="Java"><i class="fa fa-star"></i><b>Java后台</b></router-link></li>
				<li><router-link to="product"><i class="fa fa-inbox"></i><b>Product</b></router-link></li>
        <li><span @click="query"><i class="fa fa-comment"></i><b>查询状态</b></span></li>
        <li><router-link to="signup"><i class="fa fa-key"></i><b>Signup</b></router-link></li>
        <li v-if="judge"><span v-on:click="delLogin"><i class="fa fa-magic"></i><b>Login</b></span></li>
        <li v-else><span v-on:click="delLogin"><i class="fa fa-magic"></i><b>{{ name }}</b></span></li>
        <li v-if="!judge"><span @click="exit"><i class="fa fa-power-off"></i><b>Exit</b></span></li>
			</ul>
			<!-- Content area -->
			<section >
        
      <!-- <div class="adminbg">
        <img id="bg" src="" alt="" />
      </div> -->
        <!-- Label for #tm checkbox -->
				<label for="tm" class="cd-nav-trigger" @click="rotatez">
          <span class="cd-nav-icon"></span>
          <svg x="0px" y="0px" width="50px" height="50px" viewBox="0 0 54 54">
            <circle fill="transparent" stroke="#656e79" stroke-width="1" cx="27" cy="27" r="25" stroke-dasharray="157 157" stroke-dashoffset="157"></circle>
          </svg>
        </label>
        <transition :name="tsname" mode="">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
        <!-- <div class="phone__logo">
          <p>Copyright © 2018 西安邮电大学移动开发应用实验室 All rights reserved</p>
        </div> -->
			</section>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
import { clearCookie } from "../js/cookie";
import { getCookie } from '../js/cookie';
import { undecode } from '../js/cookie';
import { MessageBox } from 'mint-ui';
import { setInterval } from 'timers';
export default {
  name: 'admin',
  data () {
    return {
      animating: true,
      judge: true,
      name: undecode(getCookie('username')),
      mark: 0,
      tate: 0,
      tsname: 'admin',
      carouData: [
        require('../assets/android.jpg'),
        require('../assets/ios.jpg'),
        require('../assets/web.jpg'),
      ],
      imgArr: [
        require('../assets/fix-pe1.jpg'),
        require('../assets/fix-pe2.jpg'),
        require('../assets/fix-pe3.jpg'),
      ]
    }
  },
  mounted () {
    this.pcJudge();
    if(getCookie('username') !== '12345678') {
      this.judge = false;
    }
    // let bg = $('#bg')
    // let count = 1;
    // let that = this;
    // bg.attr('src', "require('../assets/fix-pe1.jpg')");
    // setInterval(function () {
    //   bg.attr('src', that.imgArr[count]);
    //   // console.log(that.imgArr[count]);
    //   count++;
    //   if (count == 3) {
    //     count = 0;
    //   }
    // }, 3000);
  },
  watch: {
    '$route' (to, from) {
      if(to.path === '/admin') {
        this.tsname = 'admin';
      }
      if(to.path === '/web') {
        this.tsname = 'web';
      }
      if(to.path === '/android') {
        this.tsname = 'android';
      }
      if(to.path === '/ios') {
        this.tsname = 'ios';
      }
      if(to.path === '/Java') {
        this.tsname = 'java';
      }
      if(to.path === '/product') {
        this.tsname = 'product';
      }
      if(to.path === '/signup') {
        this.tsname = 'signup';
      }
    }
  },
  methods: {
    aaa () {
      // alert()
      $("input[type='checkbox']").prop("checked",false);
    },
    rotatez () {
      this.tate += 360;
      let aaa = $('.cd-nav-trigger');
      // console.log(this.tate);
      aaa.css({
        transform: 'rotateZ(' + this.tate + 'deg)'
      })
    },
    exit () {
      if (!this.animating) {
        MessageBox.confirm('确定退出登录?').then(action => {
            clearCookie('username');
            clearCookie('userid');
            window.location.reload();
          });
        }
    },
    pcJudge () {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
          this.animating = false;
      } else {
          this.animating = true;
      }
    },
     query () {
       let that = this;
       let id = getCookie('userid');
      //  console.log(id);
      $.ajax({
        type: "GET",
        // url: 'http://127.0.0.1:3000/SignUp',
        url: "http://193.112.4.143:3000/infoOne",
        dataType: "json",
        data: {
          id: id
        },
        xhrFields: { withCredentials: true },
        success: function (response) {
          if(response.Error) {
            if (that.animating) {
              that.$alert(response.Result, 'Error', {
                confirmButtonText: '确定'
              });
            } else {
              MessageBox('Error', response.Result);
            }
          } else {
            if (that.animating) {
              that.$alert('状态：' + response.Result, 'success', {
                confirmButtonText: '确定'
              });
            } else {
              MessageBox('状态', response.Result);
            }
          }
        },
        error: function (err) {
          console.log(err);
        }
      });
    },
    remove () {
      $('#erblock').css('display', 'none');
    },
    show () {
      $('#erblock').css('display', 'block');
    },
    delLogin () {
      if (getCookie('username') !== '12345678' ) {
        if (!this.animating) {
          MessageBox('警告', '你已经登陆');
        } else {
          this.$notify({
            title: '警告',
            message: '你已经登录',
            type: 'warning'
          });
          this.$confirm('你将退出登录?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '成功!'
            });
            clearCookie('username');
            clearCookie('userid');
            window.location.reload();
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });          
          });
        }
      } else {
        if (this.animating) {
          this.$confirm('你将返回登陆页面?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            clearCookie('username');
            window.location.reload();
          }).catch(() => {        
          });
        } else {
          MessageBox.confirm('你将返回登陆页面').then(action => {
            clearCookie('username');
            window.location.reload();
          });
        }
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
.adminbg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: 100%;
    height: 100%;
  }
  // z-index: 2;
  // background: url("../assets/fix-pe1.jpg");
}
@media screen and (min-width:100px) and (max-width:750px) {
  @font-face {
	font-family: 'icomoon';
	src:url('../fonts/icomoon.eot?rretjt');
	src:url('../fonts/icomoon.eot?#iefixrretjt') format('embedded-opentype'),
		url('../fonts/icomoon.woff?rretjt') format('woff'),
		url('../fonts/icomoon.ttf?rretjt') format('truetype'),
		url('../fonts/icomoon.svg?rretjt#icomoon') format('svg');
	font-weight: normal;
	font-style: normal;
}
  // @import '../less/default.css';
  @import 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css';
  // @import 'http://cdn.bootcss.com/font-awesome/4.4.0/css/font-awesome.min.css';
  .web-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.admin-enter-active {
  // transition: all .3s ease;
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.admin-enter-to {
  transform: rotateY(360deg);
  opacity: 0;
}
.web-leave-to {
  // transform: translateX(10px);
  transform: rotate(360deg);
  opacity: 0;
}
.ios-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.ios-leave-to {
  // transform: translateX(10px);
  transform: scale3d(0,0,0);
  // animation: 
  opacity: 0;
}
.android-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.android-leave-to {
  transform: translate3d(300px,300px,300px);
  opacity: 0;
}
.java-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.java-leave-to {
  transform: matrix(1,0.8,-0.8,0.586,40,40);
  opacity: 0;
}
.product-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.product-leave-to {
  transform: skewX(180deg);
  opacity: 0;
}
.signup-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.signup-leave-to {
  transform: skewY(180deg);
  opacity: 0;
}
  .phone__logo {
    width: 100%;
    height: 50px;
    // position: relative;
    // top: -50px;
    // left: 0;
    margin-top: -50px;
    background-color: rgb(184, 179, 179);
    p {
      padding-top: 10px;
      color: rgb(219, 230, 230);
      letter-spacing: 0.01rem;
      font-size: 0.8rem;
    }
  }
  #wrapper {width: 100%; height: 100%;}
  .cd-nav-trigger {
  position: fixed;
  z-index: 3;
  left: 5%;
  top: 20px;
  height: 45px;
  width: 45px;
  background-color: #243040;
  opacity: 0.5;
  border-radius: 50%;
  /* image replacement */
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  -webkit-transition: -webkit-transform 0.5s;
  -moz-transition: -moz-transform 0.5s;
  transition: transform 0.5s;
}
.cd-nav-trigger .cd-nav-icon {
  /* icon created in CSS */
  position: absolute;
  left: 50%;
  top: 50%;
  bottom: auto;
  right: auto;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 22px;
  height: 2px;
  background-color: #ffffff;
}
.cd-nav-trigger .cd-nav-icon::before, .cd-nav-trigger .cd-nav-icon:after {
  /* upper and lower lines of the menu icon */
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: inherit;
  /* Force Hardware Acceleration in WebKit */
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: -webkit-transform 0.5s, width 0.5s, top 0.3s;
  -moz-transition: -moz-transform 0.5s, width 0.5s, top 0.3s;
  transition: transform 0.5s, width 0.5s, top 0.3s;
}
.cd-nav-trigger .cd-nav-icon::before {
  -webkit-transform-origin: right top;
  -moz-transform-origin: right top;
  -ms-transform-origin: right top;
  -o-transform-origin: right top;
  transform-origin: right top;
  -webkit-transform: translateY(-6px);
  -moz-transform: translateY(-6px);
  -ms-transform: translateY(-6px);
  -o-transform: translateY(-6px);
  transform: translateY(-6px);
}
.cd-nav-trigger .cd-nav-icon::after {
  -webkit-transform-origin: right bottom;
  -moz-transform-origin: right bottom;
  -ms-transform-origin: right bottom;
  -o-transform-origin: right bottom;
  transform-origin: right bottom;
  -webkit-transform: translateY(6px);
  -moz-transform: translateY(6px);
  -ms-transform: translateY(6px);
  -o-transform: translateY(6px);
  transform: translateY(6px);
}
.no-touch .cd-nav-trigger:hover .cd-nav-icon::after {
  top: 2px;
}
.no-touch .cd-nav-trigger:hover .cd-nav-icon::before {
  top: -2px;
}
.cd-nav-trigger svg {
  position: absolute;
  top: 0;
  left: 0;
}
.cd-nav-trigger circle {
  /* circle border animation */
  -webkit-transition: stroke-dashoffset 0.4s 0s;
  -moz-transition: stroke-dashoffset 0.4s 0s;
  transition: stroke-dashoffset 0.4s 0s;
}
.navigation-is-open .cd-nav-trigger {
  /* rotate trigger when navigation becomes visible */
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.navigation-is-open .cd-nav-trigger .cd-nav-icon::after,
.navigation-is-open .cd-nav-trigger .cd-nav-icon::before {
  /* animate arrow --> from hamburger to arrow */
  width: 50%;
  -webkit-transition: -webkit-transform 0.5s, width 0.5s;
  -moz-transition: -moz-transform 0.5s, width 0.5s;
  transition: transform 0.5s, width 0.5s;
}
.navigation-is-open .cd-nav-trigger .cd-nav-icon::before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.navigation-is-open .cd-nav-trigger .cd-nav-icon::after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.no-touch .navigation-is-open .cd-nav-trigger:hover .cd-nav-icon::after, .no-touch .navigation-is-open .cd-nav-trigger:hover .cd-nav-icon::before {
  top: 0;
}
.navigation-is-open .cd-nav-trigger circle {
  stroke-dashoffset: 0;
  -webkit-transition: stroke-dashoffset 0.4s 0.3s;
  -moz-transition: stroke-dashoffset 0.4s 0.3s;
  transition: stroke-dashoffset 0.4s 0.3s;
}
	.mobile {
    width: 100%; height: 100%;
		float: left; position: relative;
		box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.5);
		overflow: hidden;
	}
	/*Hiding the checkbox*/
	#tm {display: none;}
	/*Content area*/
	.mobile section {
    background: url("../assets/fix-pe4.jpg");
    // background-color: white;
    background-size: 100% 100%;
		width: 100%; height: 100%;
		position: relative; transition: all 0.25s;
	}
	// .mobile section label {
	// 	color: white; font: bold 14px Montserrat; text-align: center;
	// 	border: 2px solid white; border-radius: 4px;
	// 	display: block; padding: 10px 0;
	// 	width: 60%; position: absolute; left: 20%; top: 100px;
	// 	cursor: pointer; text-transform: uppercase;
	// }
	/*Nav styles*/
	.sidenav {
		background: rgb(50, 60, 60); width: 150px;
		position: absolute; left: 0; top: 0; bottom: 0; padding-top: 50px;
	}
	.sidenav li {list-style-type: none;}
  .sidenav a,
  .sidenav span { color: white; text-decoration: none; }
	.sidenav b {
		font: bold 12px/48px Montserrat; display: block;
		opacity: 0; transform: translateX(50px); transition: all 0.4s;
	}
  .sidenav a i,
  .sidenav span i {
		display: block; width: 50px; float: left; 
		font-size: 16px; line-height: 48px; text-align: center;
	}
	/*Animation controls using checkbox hack*/
	/*Animate content area to the right*/
	#tm:checked ~ section {transform: translateX(150px);}
	/*Animate links from right to left + fade in effect*/
	#tm:checked ~ .sidenav b {opacity: 1; transform: translateX(0);}

	/*Adding delay to link animation - in multiples of .08s*/
	/*One can use jQuery also for creating the delayed effect. But I will stick to manual CSS for this walkthrough.*/
	#tm:checked ~ .sidenav li:nth-child(1) b {transition-delay: 0.08s;}
	#tm:checked ~ .sidenav li:nth-child(2) b {transition-delay: 0.16s;}
	#tm:checked ~ .sidenav li:nth-child(3) b {transition-delay: 0.24s;}
	#tm:checked ~ .sidenav li:nth-child(4) b {transition-delay: 0.32s;}
	#tm:checked ~ .sidenav li:nth-child(5) b {transition-delay: 0.40s;}
  #tm:checked ~ .sidenav li:nth-child(6) b {transition-delay: 0.48s;}
  #tm:checked ~ .sidenav li:nth-child(7) b {transition-delay: 0.56s;}
	#tm:checked ~ .sidenav li:nth-child(8) b {transition-delay: 0.64s;}
  #tm:checked ~ .sidenav li:nth-child(9) b {transition-delay: 0.72s;}
  #tm:checked ~ .sidenav li:nth-child(10) b {transition-delay: 0.80s;}
}
.navigation {
  // position: absolute;
  width: 100%;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.856);
  color: rgba(255, 255, 255, 0.699);
        font-family: "Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  ul {
    user-select: none;
    margin: 0 auto;
    width: 1000px;
    min-width: 1000px;
    line-height:35px; 
    // background-color: aqua;
    li {
      font-size: 0.9em;
      width: 80px;
      text-align: center;
      // background-color: red;
      display: inline-block;
      a,
      span {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.699);
        font-family: "Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      }
      a:hover,
      span:hover {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.918);
        text-decoration: line-through;
      }
    }
  }
}
.box {
  max-width: 100%;
  overflow-x: hidden;
  width: 100%;
  // overflow: hidden;
  }
  .group {
    width: 100%;
    max-width: 100%;
    min-width: 1000px;
    height: 600px;
  }
  footer {
    width: 100%;
    max-width: 100%;
    min-width: 1000px;
    height: 170px;
    background-color: rgb(242, 242, 242);
    color: rgb(51, 51, 51);
    .fbox {
      min-width: 1000px;
      width: 1000px;
      height: 100%;
      margin: 0 auto;
      // background-color: aqua;
      .logo {
        width: 400px;
        height: 30px;
        padding-top: 60px;
        // background-color: red;
        text-align: left;
        .logoImg {
          user-select: none;
          height: 34px;
          width: 230px;
          cursor: pointer;
          img {
            width: 100%;
          }
        }
        .logop {
          padding-top: 10px;
          user-select: none;
          p {
            font-size: 12px;
            font-weight: 200;
          }
        }
      }
      .info {
        user-select: none;
        width: 260px;
        height: 120px;
        float: right;
        margin-top: -60px;
        // user-select: none;
        // background-color: aqua;
        border-left: 1px solid rgb(192, 192, 189);
        border-right: 1px solid rgb(192, 192, 189);
        .infobox {
          width: 210px;
          height: 110px;
          margin: 5px auto;
          color: rgb(179, 181, 182);
          h3 {
            font-size: 15px;
            font-weight: 500;
            text-align: left;
            color: rgb(179, 181, 182);
            letter-spacing: 2px;
          }
          .blog {
            padding-top: 20px;
            font-size: 12px;
            text-align: left;
            a {
              cursor: pointer;
              color: rgb(179, 181, 182);
              text-decoration: none;
            }
          }
          .talk {
            text-align: left;
            padding-top: 5px;
            font-size: 12px;
          }
          .er {
            text-align: left;
            padding-top: 5px;
            font-size: 12px;
            vertical-align: middle;
          }
          #erblock {
            display: none;
            width: 140px;
            margin-top: -140px;
            margin-left: 110px;
          }
        }
      }
    }
  }
</style>
