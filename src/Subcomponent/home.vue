<template>
  <div class="box">
    <div class="carouselBox">
      <div class="carousel">
        <ul>
          <li v-for="(item,index) in carouData" v-show="index===mark" :key="index">
            <img :src="item" alt="index">
          </li>
        </ul>
      </div>
      <div class="floatBox"></div>
      <h2>We <em> want </em> you.</h2>
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
            <img src="../assets/android2.png" alt="" srcset="../assets/android2.png, ../assets/ios.jpg" sizes="(max-width: 360px) 300px, 400px">
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

    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return { 
      mark: 0,
      carouData: [
        require('../assets/android.jpg'),
        require('../assets/ios.jpg'),
        require('../assets/web.jpg'),
      ]
    }
  },
  methods: {
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
    height: 300px;
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
