<template>
  <!-- 制作一个框架包裹slider -->
  <div style="width:70%;margin:20px auto;height:400px">
    <!-- 配置slider组件 -->
    <slider :pages="pages" :sliderinit="sliderinit" >
      <!-- 设置loading,可自定义 -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
  import slider from 'vue-concise-slider'// import slider components
  export default {
    data() {
      return {
        //Image list
        pages: [
          {
            html: '<div class="slider1">slider1</div>',
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            html: '<div class="slider2">slider2</div>',
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            html: '<div class="slider3">slider3</div>',
            style: {
              'background': '#7baabe'
            }
          }
        ],
        //Sliding configuration [obj]
        sliderinit: {
          currentPage: 0,
          thresholdDistance: 500,
          thresholdTime: 4000,
          autoplay: 0,
          loop: true,
          direction: 'vertical',
          infinite: 1,
          slidesToScroll: 1,
          timingFunction: 'ease',
          duration: 300
        }
      }
    },
    components: {
      slider
    }
  }
</script>