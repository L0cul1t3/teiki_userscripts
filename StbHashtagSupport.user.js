// ==UserScript==
// @name         StbHashtagSupport
// @version      v1.0
// @description  ハッシュタグ検索くん周囲とかでも働け～
// @author       L0cul1t3
// @match        https://soraniwa.428.st/stb/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
  const lsre = /\?mode=chat/g;
  document.querySelectorAll('a.tag').forEach((tg)=>{
    const kw = tg.href.substring(tg.href.indexOf("&keyword="));
    const params = new URLSearchParams(window.location.search);

    if(params.get("list")&&params.get("room")&&params.get("room")!="-1"){
      if(params.get("list")=="1"||params.get("list")=="8"){
        tg.href = `./?mode=chat&list=0&room=${params.get("room")}${tg.href.substring(tg.href.indexOf("&keyword="))}`;
      }else{
        tg.href = `./?mode=chat&list=${params.get("list")}&room=${params.get("room")}${tg.href.substring(tg.href.indexOf("&keyword="))}`;
      }
    }else if(params.get("list")&&params.get("room")=="-1"){
      if(params.get("list")=="1"||params.get("list")=="8"){
        tg.href = `./?mode=chat&list=0${tg.href.substring(tg.href.indexOf("&keyword="))}`;
      }else{
        tg.href = `./?mode=chat&list=${params.get("list")}${tg.href.substring(tg.href.indexOf("&keyword="))}`;
      }
    }else{
      tg.href = `./?mode=chat&list=0${tg.href.substring(tg.href.indexOf("&keyword="))}`;
    }
  });
})();
