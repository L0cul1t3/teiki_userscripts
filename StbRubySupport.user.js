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

(($)=> {
    $('span.decoarea #deco_u').after('<span id="deco_rb" title="ルビ"><img src="https://soraniwa.428.st/stb/img/ruby.png" style="margin:5px;padding:0;"><span>');
    $('#deco_rb').click(function() {
      $('#text').val().substr(0,$('#text').selectionStart)
        +"<rb>"
        +$('#text').val().substr($('#text').selectionStart,$('#text').selectionEnd-$('#text').selectionStart)
        +"</rb><rt></rt>"
        +$('#text').val().substr($('#text').selectionEnd);
    });
})(jQuery);