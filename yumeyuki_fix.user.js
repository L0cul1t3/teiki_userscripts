// ==UserScript==
// @name         ユメユキの挙動をいい感じにするやつ
// @namespace    https://x.com/L0cul1t3
// @version      0.2
// @description  ハート化けとか全角スペース半角化をﾓﾁｮします。たぶん。
// @author       ロークライト
// @match        http://futahana.rash.jp/yumeyuki/*
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @require      http://futahana.rash.jp/yumeyuki/assets/js/models/room.js?1.6.3
// ==/UserScript==

var $ = window.jQuery;

$(function() {
  'use strict';
  $("body").css("font-family", "Trebuchet MS,Verdana,Arial,sans-serif !important");

  $.ajax({
    url:"http://futahana.rash.jp/yumeyuki/assets/js/models/room.js?1.6.3",
    dataType:"text/javascript",
    success:function(data){
      data.Room.Preview = function(){
        var icon = $("input[name='radio_icons']:checked").val().split(",");
        var date = new Date();
        var date_str = date.getFullYear().toString()+("0"+(date.getMonth()+1)).slice(-2)+
            ("0"+date.getDate()).slice(-2)+("0"+date.getHours()).slice(-2)+
            ("0"+date.getMinutes()).slice(-2)+("0"+date.getSeconds()).slice(-2);
        var tmp = $("textarea[name='text']").val();
        var item = tmp.match(/\[item:([^:]+):([^:]+):([^\[\]]+):(.+)\]/);
        var font_size = { s: "small", xs: "x-small", m: "medium", l: "large" , xl: "x-large" };
        var text = tmp
        .replace(/&/g, "&amp")
        .replace(/</g, "&lt")
        .replace(/>/g, "&gt")
        .replace(/\n|\r/g, "<br>")
        .replace(/\x20/g, "&nbsp;")
        .replace(/\u3000/g, "&emsp;")
        .replace(/\[color:(#.{3,6})\]/g, "<span style='color: $1;'>")
        .replace(/\[font_size:(.+?)\]/g, function (v, v1) {
          return "<span style='font-size: " + font_size[v1] + ";'>";
        })
        .replace(/\[img:(https?:\/\/[^:]+)\]/g, "<img class='normal' src='$1'>")
        .replace(/\[icon:(https?:\/\/[^:]+)\]/g, "<img class='icon' src='$1'>")
        .replace(/(\[dice:([0-9]+)\])/g, "[DiceResult: **/$2]")
        .replace(
          /\[room:([0-9]+)\]/g,
          "[<span class='link' onclick='Room.Move(\"$1\")'>部屋No$1</span>]"
        )
        .replace(/\[item:(.+)\]/g, "");
        var log = {
          name: $("input[name='name']").val(),
          icon: icon[1],
          word: text,
          parent_id: $("input[name='parent_id']").val(),
          user_id: user.id,
          created_at: date_str,
          id: "****"
        };
        var preview_doms = [];
        preview_doms.push($("<ul>",{
          id: "talk_log",
          html: room.createLog(log)
        }));
        if(item){
          item[4] = item[4].replace(/&/g,"&amp").replace(/</g,"&lt").replace(/>/g,"&gt").
          replace(/\[(BR|br)\]|\n|\r/g,"<br>").replace(/\x20/g,"&nbsp").replace(/\u3000/g,"&emsp").
          replace(/\[color:(#.{3,6})\]/g,"<span style='color: $1;'>").
          replace(/(\[dice:([0-9]+)\])/g,"[DiceResult: **/$2]").
          replace(/\[room:([0-9]+)\]/g,"[<span class='link' onclick='Room.Move(\"$1\")'>部屋No$1<\/span>]");
          preview_doms.push(user.createItemList([
            {
              id: "****",
              name: item[2],
              icon: item[3],
              data: item[4].substr(0,400),
              send_user_id: user.id
            }
          ]));
        }
        Frame.createModalWindow(preview_doms);
      };
    }
  });

});
