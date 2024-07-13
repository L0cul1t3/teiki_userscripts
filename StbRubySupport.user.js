// ==UserScript==
// @name         StbRubySupport
// @version      2024-07-13
// @description  チャット欄とか記録編集にルビタグ支援のボタンを追加するやつ
// @author       L0cul1t3
// @match        https://soraniwa.428.st/stb/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=428.st
// @grant        none
// ==/UserScript==
/* global jQuery:false */

(function() {
  'use strict';
  const Rb = document.createElement('span');
  Rb.id = "deco_rb";
  Rb.title="ルビ";
  Rb.innerHTML = '<img src="https://soraniwa.428.st/stb/img/ruby.png" style="margin:5px;padding:0;">';
  Rb.addEventListener("click",function() {
    const txt = document.getElementById('text');
      txt.value = txt.value.substr(0,txt.selectionStart)
        +"<rb>"
        +txt.value.substr(txt.selectionStart,txt.selectionEnd-txt.selectionStart)
        +"</rb><rt></rt>"
        +txt.value.substr(txt.selectionEnd);
    })
})();
