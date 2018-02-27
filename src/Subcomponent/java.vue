<template>
  <div class="box phone__box">
    <div class="zbox phone__zbox">
      <section>
        <h2>Java后台</h2>
        <p>You have us as you have the world……</p>
        <router-link to="/signup">Go to sign up</router-link>
      </section>
      <div class="phone__webImg">
        <img src="../assets/web1.png" alt="">
      </div>
      <div class="phone__introduce">
        <p>利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'java'
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
      .zbox {
        width: 90%; // height: 1000px;
        max-width: 100%;
        margin: 0 auto; // background-color: aqua;
        section {
          width: 400px;
          margin: 0 auto;
          padding-top: 70px;
          h2 {
            font-size: 3em;
          }
          p {
            padding-bottom: 30px;
            font-weight: 700;
            font-size: 2em;
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
      .phone__zbox {
        width: 90%; // height: 1000px;
        max-width: 100%;
        margin: 0 auto; // background-color: aqua;
        section {
          width: 100%; // margin: 0 auto;
          padding-top: 50px;
          h2 {
            font-size: 3.5rem;
            font-weight: 600;
          }
          p {
            padding-top: 10px;
            padding-bottom: 10px;
            font-weight: 500;
            font-size: 2rem;
          }
          a {
            font-size: 1.5rem;
            font-weight: 100;
            text-decoration: none;
            color: rgb(6, 213, 250);
          }
          a:hover {
            text-decoration: line-through;
            vertical-align: middle;
            text-align: left;
          }
        }
        .phone__webImg {
          width: 80vw;
          img {
            width: 100%;
            height: auto;
          }
          margin: 40px auto 20px auto;
        }
        .phone__introduce {
          width: 90%;
          max-width: 100%;
          margin: 0 auto;
          margin-bottom: 100px;
          p {
            color: white;
            font-size: 1em;
            letter-spacing: 2px;
            line-height: 20px;
            text-align: left;
          }
        }
      }
    }
  }
</style>