<template>
  <div class="box">
    <header>
      <div class="navigation">
        <ul>
          <li>
            <span>3g</span>
          </li>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/web">Web</router-link>
          </li>
          <li>
            <router-link to="/ios">ios</router-link>
          </li>
          <li>
            <router-link to="/android">Android</router-link>
          </li>
          <li>
            <router-link to="/Java">Java后台</router-link>
          </li>
          <li>
          </li>
          <li>
            <router-link to="/android">SignUp</router-link>
          </li>
          <li>
          </li>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </header>
    <router-view></router-view>
    <footer>

    </footer>
    <div class="">

    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
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
.navigation {
  width: 100%;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.856);
  color: rgba(255, 255, 255, 0.699);
        font-family: "Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  ul {
    margin: 0 auto;
    width: 1000px;
    // min-width: 1000px;
    line-height:35px; 
    // background-color: aqua;
    li {
      font-size: 0.9em;
      width: 90px;
      text-align: center;
      // background-color: red;
      display: inline-block;
      a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.699);
        font-family: "Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      }
      a:hover {
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
</style>
