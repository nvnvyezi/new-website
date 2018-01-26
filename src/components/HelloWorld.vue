<template>
  <div>
    <span id="name"></span>
    <label for="username">userid : </label>
    <input type="text" id="userid" placeholder="请输入用户名" />
    <hr />
    <label for="password">password : </label>
    <input type="password" name="password" id="password" placeholder="请输入密码" />
    <hr />
    <select name="cars" id="gender">
      <option  selected disabled>性别</option>
      <option value="女">女</option>
      <option value="男">男</option>
    </select>
    <hr>
    <label for="phone">phone : </label>
    <input type="text" id="phone" placeholder="请输入手机号" />
    <hr />
    <label for="email">Email : </label>
    <input type="email" name="email" id="email" placeholder="请输入邮箱" />
    <hr>
    <img src="" alt='vercode' id='vercodeimg' />
    <hr />
    <select name="cars" id="direction" >
      <option value="" disabled selected>方向</option>
      <option value="Android">Android</option>
      <option value="ios">ios</option>
      <option value="web">web</option>
      <option value="Java后台">Java后台</option>
    </select>
    <hr>
    <label for="vercode">vercode : </label>
    <input type="text" id="vercode" placeholder="请输入验证码" />
    <hr />
    <label for="words">words : </label>
   <textarea name="words" id="words" cols="50" rows="2" maxlength="500" placeholder="留言"></textarea>
    <hr />
    <input type="button" value="LOGIN" id="button"/>
    <hr />
    <input type="button" value="报名" id="signUp" />
  </div>
</template>

<script>
import getVercode from '../js/getVercode'
import userLogin from '../js/userLogin'
import signup from '../js/signUP'
export default {
  components: {
    getVercode,
    userLogin,
    signup
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
