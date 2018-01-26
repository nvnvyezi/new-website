import * as $ from 'jquery'
import {setCookie} from './cookie'
import { Base64 } from '../encryption/base64'

const B = new Base64();

const reqvercode = function(){
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:3000/Vercode",
    dataType: "json",
    async: true,
    success: function (response) {
      $("#vercodeimg").attr('src', response.result.VerCode);
      const session = B.encode(response.result.Cookies);
      setCookie('session', session, 1)
    }
  });
}

$(document).ready(function () {
  reqvercode();
  $('#vercodeimg').click(function () {
    reqvercode();
  })
})
