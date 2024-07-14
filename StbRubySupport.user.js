// ==UserScript==
// @name         StbRubySupport
// @version      2024-07-13
// @description  チャット欄とか記録編集にルビタグ支援のボタンを追加するやつ
// @author       L0cul1t3
// @match        https://soraniwa.428.st/stb/?mode=storyedit*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=428.st
// @grant        none
// ==/UserScript==
/* global jQuery:false */

(function() {
  'use strict';
  const Rb = document.createElement('span');
  const TargetTxt = document.getElementById('text');
  Rb.id = "deco_rb";
  Rb.title="ルビ";
  Rb.innerHTML = '<img src="https://soraniwa.428.st/stb/img/ruby.png" style="margin:5px;padding:0;">';
  document.querySelector('span.decoarea span#deco_u').after(Rb);
  Rb.addEventListener("click",function() {
      TargetTxt.value = TargetTxt.value.substr(0,TargetTxt.selectionStart)
        +"<rb>"
        +TargetTxt.value.substr(TargetTxt.selectionStart,TargetTxt.selectionEnd-TargetTxt.selectionStart)
        +"</rb><rt></rt>"
        +TargetTxt.value.substr(TargetTxt.selectionEnd);
    });
})();
